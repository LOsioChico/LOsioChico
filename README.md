<img src="assets/banner.svg" width="100%" alt="terminal: a RAG abstains on a question the evidence can't back" />

# Luis Osio Chico

**AI engineer** · Colombia (UTC-5) · 3+ years in production systems · open to remote

I build AI systems that answer with sources — or don't answer at all.

## see it refuse

```bash
curl -N "https://luisosio.dev/sr/v1/ask?q=does+ashwagandha+help+sleep"

# the other fork — a question the corpus can carry, cited PMIDs and all:
curl -N "https://luisosio.dev/sr/v1/ask?q=does+creatine+help+build+muscle"
```

the finding behind the design: on 4,026 admitted eval rows, **52% of "covered" questions had no real supporting evidence** — a system that answers whatever it retrieves fabricates on half its input, so this one checks every claim before trusting it. golden + held-out evals are committed; every prod run leaves a public trace at `GET luisosio.dev/sr/v1/run/{rid}`.

```text
     ┌─ eval admission · noise gets rejected before testing ────┐
     │  collected                                       5,569   │
     │  ├─ rejected · no evidence in the corpus         1,543   │
     │  └─ admitted                                     4,026   │
     │     ├─ golden · the tuning set                     126   │
     │     └─ held-out · never tuned                      199   │
     └──────────────────────────────────────────────────────────┘
      rejected rows keep their reason in evals/rejected.jsonl
```

```text
        question ──▶ gate ──▶ retrieve ──▶ verify, claim by claim
                       │     BM25+dense    every claim needs
                       │     RRF-fused     its PMID, ≥0.7
                       │                       │
        injection · advice · unrelated   ┌────┴────┐
        ──────────────▶ refuse · decline ▼         ▼
                                 ┌──────────┐ ┌───────────┐
                                 │  cited   │ │  abstain  │
                                 │  answer  │ │ by design │
                                 └──────────┘ └───────────┘
```

## systems

| | what it does | status |
| ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**supplements-rag**](https://github.com/LOsioChico/supplements-rag) | evidence-bounded RAG over 17.7k PubMed abstracts — answers with cited PMIDs, or abstains. evals committed; fixes are measured, not vibes. | [![supplements api](https://img.shields.io/website?url=https%3A%2F%2Fluisosio.dev%2Fsr%2Fv1%2Fping&up_message=live&down_message=down&style=flat-square&label=api&cacheSeconds=900)](https://luisosio.dev/sr/v1/ping) |
| [**mdingest**](https://github.com/LOsioChico/mdingest) | articles to clean Markdown for LLMs. Cloudflare Workers, four interfaces on one core (REST, CLI, web, MCP). | [![mdingest api](https://img.shields.io/website?url=https%3A%2F%2Fmdingest.knightker.workers.dev%2Fv1&up_message=live&down_message=down&style=flat-square&label=api&cacheSeconds=900)](https://mdingest.knightker.workers.dev/v1) |
| [**italki-cli**](https://github.com/LOsioChico/italki-cli) | italki from the terminal: lessons, teachers, scheduling. Ships as a CLI and an MCP server. | [![last commit](https://img.shields.io/github/last-commit/LOsioChico/italki-cli?style=flat-square&label=updated)](https://github.com/LOsioChico/italki-cli) |

```bash
curl "https://mdingest.knightker.workers.dev/v1/devto?url=<any dev.to article>"
```

## read me like one too

this dossier is machine-readable end to end — recruiters and agents read the same truth:

```bash
curl luisosio.dev/v1/me.json        # the profile as JSON
curl luisosio.dev/llms.txt          # curated index for LLMs
curl luisosio.dev/.well-known/ai-catalog.json  # agent-facing capability catalog
```

or skip the curl — the dossier is itself an MCP server:

```json
{ "mcpServers": { "luis-osio": { "url": "https://luisosio.dev/v1/mcp" } } }
```

## writing

- [I built a RAG that refuses to answer — and measured when it should](https://dev.to/losiochico1/i-built-a-rag-that-refuses-to-answer-and-measured-when-it-should-1ag) — the eval contract, the 52% finding, and what a rescue pass moved

## track record

- **TXEN** · ai engineer, dec 2025 – present. Hybrid RAG in Python/FastAPI over municipal tax statutes (`pgvector`, keyword search, reranking, cited answers with abstention — validated against the accounting team's golden dataset); Doru's speech→structured clinical-record pipeline (Pydantic validation, event-driven reminders). Also the boring production wins: a hot endpoint from 5–8s to ~150ms, a 19-phase PostgreSQL migration across all 1,103 Colombian municipalities, prod moved to a new AWS account in <12h.
- **Nord Tech** · junior to software engineer in under a year. Real-time reservation/streaming platform (scala, kafka, websockets); modernized a 100+ endpoint fintech codebase ahead of AWS Lambda's Node 14 deprecation.

## numbers

```text
┌──────────────┬──────────────┬──────────────┬──────────────┐
│  ~$0.0007    │  ~150ms      │  1,103       │  <12mo       │
│  a fully-    │  selector    │  Colombian   │  junior to   │
│  traced run  │  endpoint    │  towns live  │  SWE promo   │
│  costs       │  (was 5-8s)  │  on platform │              │
│  (61 calls)  │              │              │              │
└──────────────┴──────────────┴──────────────┴──────────────┘
```

_The run cost comes from the pipeline's own ledger in the [repo](https://github.com/LOsioChico/supplements-rag); the production numbers are on the [CV](https://luisosio.dev/cv.pdf). Happy to walk through any of them._

## now

- working: ai engineer at TXEN (B2B SaaS — Python/FastAPI RAG & speech-to-text clinical AI pipelines, TypeScript/AWS)
- building: python/fastapi AI systems — [supplements-rag](https://github.com/LOsioChico/supplements-rag) shipped; next eval tooling lands as it ships
- open to: ai engineer / backend / full-stack roles · remote · LATAM and US time zones

<!-- now:start -->
> _auto-updated daily by CI_
>
> mdingest api: **v1 · live** · last public push: **[LOsioChico](https://github.com/LOsioChico/LOsioChico)** · pulse 2026-11-21
<!-- now:end -->

## how i work

Python/FastAPI for AI services; TypeScript/Node where production history lives. I ship MCP servers — mdingest, italki-cli, the dossier itself — I build AI tooling, not just use it. Verified the boring way: types, tests, evals. This README updates itself via CI; proof is in the Actions tab.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=py%2Cfastapi%2Cts%2Creact%2Cnodejs%2Cpostgres%2Caws%2Ccloudflare%2Cdocker%2Cbun%2Castro%2Credis&theme=dark" />
  <img src="https://skillicons.dev/icons?i=py%2Cfastapi%2Cts%2Creact%2Cnodejs%2Cpostgres%2Caws%2Ccloudflare%2Cdocker%2Cbun%2Castro%2Credis&theme=light" alt="Python, FastAPI, TypeScript, React, Node.js, PostgreSQL, AWS, Cloudflare, Docker, Bun, Astro, Redis" />
</picture>

<sub>[luisosio.dev](https://luisosio.dev) · [osiochico@gmail.com](mailto:osiochico@gmail.com) · [linkedin](https://linkedin.com/in/losiochico) · [dev.to](https://dev.to/losiochico1) · es native, en B2</sub>
