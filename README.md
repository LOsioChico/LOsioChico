<img src="assets/banner.svg" width="100%" alt="terminal: curl mdingest api (live)" />

# Luis Osio Chico

**Full-stack engineer, backend-leaning** · TypeScript · React · Node.js (Express, NestJS) · AWS · PostgreSQL
Colombia (UTC-5) · in production systems since 2024 · open to remote

I build web products end to end: the screens people touch and the systems underneath.

## try this

```bash
curl "https://mdingest.knightker.workers.dev/v1/devto?url=<any dev.to article>"
```

```markdown
---
title: "We All Have a \"Serious Work\" AI and a \"Just Vibing\" AI. When Did That Happen?"
author: "Dhruv Jani"
date: "2026-09-22"
reading_time: "4 min read"
provider: "devto"
tags: ["discuss", "ai", "gemini", "antigravity"]
---
```

_real response, truncated. That's a live API I built and run. It ingests articles and returns clean Markdown for LLM workflows._

## systems

| | what it does | status |
|---|---|---|
| [**mdingest**](https://github.com/LOsioChico/mdingest) | articles to clean Markdown for LLMs. Cloudflare Workers, four interfaces on one core (REST, CLI, web, MCP). | [![mdingest api](https://img.shields.io/website?url=https%3A%2F%2Fmdingest.knightker.workers.dev%2Fv1&up_message=live&down_message=cold%20start&style=flat-square&label=api&cacheSeconds=300)](https://mdingest.knightker.workers.dev/v1) |
| [**replication-lag-lab**](https://github.com/LOsioChico/replication-lag-lab) | see Postgres replication lag and read-your-writes consistency happen, hands-on. Docker + pg + TypeORM, with a [written essay](https://github.com/LOsioChico/replication-lag-lab/blob/main/essay.md). | [![last commit](https://img.shields.io/github/last-commit/LOsioChico/replication-lag-lab?style=flat-square&label=updated)](https://github.com/LOsioChico/replication-lag-lab) |
| [**italki-cli**](https://github.com/LOsioChico/italki-cli) | italki from the terminal: lessons, teachers, scheduling. Ships as a CLI and an MCP server. | [![last commit](https://img.shields.io/github/last-commit/LOsioChico/italki-cli?style=flat-square&label=updated)](https://github.com/LOsioChico/italki-cli) |

## numbers

```text
┌──────────────┬──────────────┬──────────────┬──────────────┐
│  ~150ms      │  1,103       │  <12mo       │  12h         │
│  hot         │  Colombian   │  junior to   │  AWS prod    │
│  endpoint,   │  towns live  │  SWE promo   │  migration,  │
│  was ~8s     │  on platform │              │  zero loss   │
└──────────────┴──────────────┴──────────────┴──────────────┘
```

_Every number above is on the CV. Happy to walk through any of them in an interview._

## track record

- **TXEN / We4Labs** · software engineer, dec 2025 – aug 2026. Core engineer on a B2B tax compliance platform covering all 1,103 Colombian municipalities. Took a hot endpoint from ~8s to ~150ms, built a 19-phase ETL over 118k+ legacy records, migrated staging + prod to AWS in 12h with zero data loss.
- **Nord Tech** · junior to software engineer in under a year. Real-time reservation platform (Scala, Kafka, WebSockets); migrated a 100+ endpoint fintech codebase off a legacy ORM.

## now

- building: a multi-tenant SaaS for the Colombian restaurant market (freelance)
- studying: system design + DSA, interview prep across 10 platforms
- open to: full-stack engineer roles · remote · US time zones

<!-- now:start -->
> _auto-updated daily by CI_
>
> mdingest api: **v1 · live** · last public push: **[LOsioChico](https://github.com/LOsioChico/LOsioChico)** · pulse 2026-09-25
<!-- now:end -->

## stack

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=ts%2Creact%2Cnodejs%2Cnestjs%2Cexpress%2Cpostgres%2Caws%2Ccloudflare%2Cdocker%2Cbun%2Castro%2Cscala%2Ckafka%2Credis&theme=dark" />
  <img src="https://skillicons.dev/icons?i=ts%2Creact%2Cnodejs%2Cnestjs%2Cexpress%2Cpostgres%2Caws%2Ccloudflare%2Cdocker%2Cbun%2Castro%2Cscala%2Ckafka%2Credis&theme=light" alt="TypeScript, React, Node.js, NestJS, Express, PostgreSQL, AWS, Cloudflare, Docker, Bun, Astro, Scala, Kafka, Redis" />
</picture>

## how i work

NestJS for structure: DI, modules, clean boundaries. Functional style where it pays. I build AI-assisted and verify the boring way: types, tests, receipts. This README updates itself via CI. Proof is in the Actions tab.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/LOsioChico/LOsioChico/metrics-assets/github-snake-dark.svg" />
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/LOsioChico/LOsioChico/metrics-assets/github-snake.svg" />
  <img alt="contribution snake" src="https://raw.githubusercontent.com/LOsioChico/LOsioChico/metrics-assets/github-snake.svg" />
</picture>

<sub>[osiochico@gmail.com](mailto:osiochico@gmail.com) · [linkedin](https://linkedin.com/in/losiochico) · es native, en B2</sub>
