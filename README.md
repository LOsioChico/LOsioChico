<img src="assets/banner.svg" width="100%" alt="terminal: curl mdingest api (live)" />

# Luis Osio Chico

**AI engineer · software engineer (backend & full-stack)** · Python · FastAPI · TypeScript · React · Node.js · AWS · PostgreSQL
Colombia (UTC-5) · 3+ years in production systems · open to remote

I build AI systems on a production full-stack spine: agents, retrieval, and the eval harnesses that keep them honest.

## try this

```bash
curl "https://mdingest.knightker.workers.dev/v1/devto?url=<any dev.to article>"
```

```markdown
---
title: 'We All Have a "Serious Work" AI and a "Just Vibing" AI. When Did That Happen?'
author: 'Dhruv Jani'
date: '2026-09-22'
reading_time: '4 min read'
provider: 'devto'
tags: ['discuss', 'ai', 'gemini', 'antigravity']
---
```

_real response, truncated. that's a live API I built and run — it ingests articles and returns clean Markdown for LLM workflows._

## or ask an agent to do it

mdingest ships as an MCP server — paste this into your agent's config and ask it to ingest something:

```json
{
  "mcpServers": {
    "mdingest": { "url": "https://mdingest.knightker.workers.dev/v1/mcp" }
  }
}
```

Devin, Claude Code, Cursor — anything that speaks MCP gets two tools: `ingest_article` and `list_providers`.

## read me like one too

this dossier is machine-readable end to end — recruiters and agents read the same truth:

```bash
curl luisosio.dev/v1/me.json        # the profile as JSON
curl luisosio.dev/llms.txt          # curated index for LLMs
curl luisosio.dev/openapi.json      # OpenAPI 3.1 spec for the above
curl luisosio.dev/.well-known/ai-catalog.json  # agent-facing capability catalog
```

or skip the curl — the dossier is itself an MCP server:

```json
{ "mcpServers": { "luis-osio": { "url": "https://luisosio.dev/v1/mcp" } } }
```

## systems

|                                                            | what it does                                                                                                | status                                                                                                                                                                                                                            |
| ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**mdingest**](https://github.com/LOsioChico/mdingest)     | articles to clean Markdown for LLMs. Cloudflare Workers, four interfaces on one core (REST, CLI, web, MCP). | [![mdingest api](https://img.shields.io/website?url=https%3A%2F%2Fmdingest.knightker.workers.dev%2Fv1&up_message=live&down_message=down&style=flat-square&label=api&cacheSeconds=900)](https://mdingest.knightker.workers.dev/v1) |
| [**italki-cli**](https://github.com/LOsioChico/italki-cli) | italki from the terminal: lessons, teachers, scheduling. Ships as a CLI and an MCP server.                  | [![last commit](https://img.shields.io/github/last-commit/LOsioChico/italki-cli?style=flat-square&label=updated)](https://github.com/LOsioChico/italki-cli)                                                                       |

```text
rest api ─┐
cli ──────┼─▶ cloudflare worker ──▶ one core ──▶ dev.to · medium · substack
mcp stdio ┤   (api + assets)       (in-worker)                    │
mcp http ─┘                                            clean markdown + frontmatter
```

## numbers

```text
┌──────────────┬──────────────┬──────────────┬──────────────┐
│  ~150ms      │  1,103       │  <12mo       │  12h         │
│  hot         │  Colombian   │  junior to   │  AWS prod    │
│  endpoint,   │  towns live  │  SWE promo   │  migration,  │
│  was ~8s     │  on platform │              │  zero loss   │
└──────────────┴──────────────┴──────────────┴──────────────┘
```

_Every number above is on the [CV](https://luisosio.dev/cv.pdf). Happy to walk through any of them in an interview._

## track record

- **TXEN** · ai engineer, dec 2025 – present. Started as core engineer across Péntica and Simplica (B2B SaaS automating municipal tax compliance across all 1,103 Colombian municipalities) and transitioned into AI Engineer across our B2B SaaS products, including Doru (AI veterinary clinical-records SaaS). Built a hybrid RAG system in Python and FastAPI over municipal tax statutes (`pgvector`, keyword search, reranking, cited answers with abstention, golden dataset evals) and engineered Doru's speech-to-text → LLM structured clinical-record pipeline with Pydantic validation + event-driven reminders. Took a hot endpoint from 5-8s to ~150ms across 14 modules, built a 19-phase PostgreSQL migration across 1,103 municipalities with SQS reverse sync, automated the ICA tax-matrix update email + attachment workflow, and migrated production to a new AWS account in under 12h. Stack: python/fastapi, typescript/node, react, postgresql, serverless aws.
- **Nord Tech** · junior to software engineer in under a year. Real-time reservation and streaming platform (scala, kafka, websockets); modernized a 100+ endpoint fintech Node.js codebase ahead of AWS Lambda's Node 14 deprecation with zero production incidents; supported two junior developers with task assignment and code reviews.

## now

- working: ai engineer at TXEN (B2B SaaS — Python/FastAPI RAG & speech-to-text clinical AI pipelines, TypeScript/AWS)
- building: python/fastapi AI systems — retrieval + agent eval tooling (repos land as they ship)
- open to: ai engineer / backend / full-stack roles · remote · US time zones

<!-- now:start -->
> _auto-updated daily by CI_
>
> mdingest api: **v1 · live** · last public push: **[LOsioChico](https://github.com/LOsioChico/LOsioChico)** · pulse 2026-10-21
<!-- now:end -->

## stack

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=py%2Cfastapi%2Cts%2Creact%2Cnodejs%2Cpostgres%2Caws%2Ccloudflare%2Cdocker%2Cbun%2Castro%2Credis&theme=dark" />
  <img src="https://skillicons.dev/icons?i=py%2Cfastapi%2Cts%2Creact%2Cnodejs%2Cpostgres%2Caws%2Ccloudflare%2Cdocker%2Cbun%2Castro%2Credis&theme=light" alt="Python, FastAPI, TypeScript, React, Node.js, PostgreSQL, AWS, Cloudflare, Docker, Bun, Astro, Redis" />
</picture>

## how i work

Python/FastAPI for AI services: agents, RAG, eval harnesses. TypeScript/Node.js where production history lives. I ship MCP servers — mdingest, italki-cli, and this dossier itself (`POST luisosio.dev/v1/mcp`) — I build AI tooling, not just use it. Verified the boring way: evals, types, tests, receipts. This README updates itself via CI. Proof is in the Actions tab.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/LOsioChico/LOsioChico/metrics-assets/github-snake-dark.svg" />
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/LOsioChico/LOsioChico/metrics-assets/github-snake.svg" />
  <img alt="contribution snake" src="https://raw.githubusercontent.com/LOsioChico/LOsioChico/metrics-assets/github-snake.svg" />
</picture>

<sub>[luisosio.dev](https://luisosio.dev) · [osiochico@gmail.com](mailto:osiochico@gmail.com) · [linkedin](https://linkedin.com/in/losiochico) · es native, en B2</sub>
