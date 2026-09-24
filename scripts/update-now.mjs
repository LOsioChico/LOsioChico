import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const README = join(import.meta.dirname, "..", "README.md");
const START = "<!-- now:start -->";
const END = "<!-- now:end -->";

async function probeMdingest() {
  const res = await fetch("https://mdingest.knightker.workers.dev/v1", {
    signal: AbortSignal.timeout(15_000),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

async function mdingestStatus() {
  // Container sleeps after 5m idle — first hit can cold-start, so retry once.
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const data = await probeMdingest();
      return `mdingest api: **${data.version ?? "v1"} · live**`;
    } catch {
      if (attempt === 0) await new Promise((r) => setTimeout(r, 15_000));
    }
  }
  return "mdingest api: **down**";
}

async function lastPublicPush() {
  try {
    const res = await fetch(
      "https://api.github.com/users/LOsioChico/repos?type=public&sort=pushed&per_page=1",
      {
        headers: {
          "User-Agent": "readme-pulse",
          ...(process.env.GITHUB_TOKEN && {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          }),
        },
        signal: AbortSignal.timeout(10_000),
      },
    );
    if (!res.ok) return null;
    const [repo] = await res.json();
    if (!repo) return null;
    return `last public push: **[${repo.name}](${repo.html_url})**`;
  } catch {
    return null;
  }
}

const pulse = new Date().toISOString().slice(0, 10);
const parts = [await mdingestStatus(), await lastPublicPush(), `pulse ${pulse}`].filter(Boolean);
const block = `${START}\n> _auto-updated daily by CI_\n>\n> ${parts.join(" · ")}\n${END}`;

const md = readFileSync(README, "utf8");
const re = new RegExp(`${START}[\\s\\S]*?${END}`);
if (!re.test(md)) throw new Error("now markers not found in README.md");

writeFileSync(README, md.replace(re, block));
console.log(block);
