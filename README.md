# AgentRouter for goose

Install four research skills and the [AgentRouter MCP connection](https://docs.agentrouter.to/integrations/mcp?utm_source=goose&utm_medium=plugin) in goose. Search the tool catalog, check pricing, and run provider tools from your existing wallet.

## Install

Use goose v1.61.1 or later with Node.js and `npx` on your PATH.

```sh
goose plugin install https://github.com/pageonelab/agentrouter-goose.git
```

Start a new goose session. The plugin starts a pinned version of mcp-remote and opens AgentRouter in your browser for sign-in. Complete sign-in on the same machine. Your connection can read tool details and results and run tools using your available balance. If the balance is too low, open [Settings → Wallet](https://www.agentrouter.to/settings/wallet?utm_source=goose&utm_medium=plugin).

## Try a task

| Skill | Ask goose |
| --- | --- |
| [Competitor brief](skills/competitor-brief/SKILL.md) | Which ranks higher on US desktop Google for “frontend hosting”, Vercel or Netlify? Give me both positions and the ranking pages. |
| [Growth teardown](skills/growth-teardown/SKILL.md) | Which acquisition channel would you test first for a product like Plausible? Show the evidence. |
| [Job shortlist](skills/job-shortlist/SKILL.md) | Find three developer relations jobs I can do from Toronto. Verify each opening and link the application. |
| [UGC teardown](skills/ugc-teardown/SKILL.md) | Use my Reel transcript to suggest two opening lines and a 15-second shooting plan for this product. |

Ask for a quote first if you only want prices. A paid call can spend existing wallet funds within your configured budgets. Tool inputs go to AgentRouter and the selected provider. Ask for the run receipt to see the charge. [AgentRouter billing](https://docs.agentrouter.to/concepts/billing) · [Research examples](https://docs.agentrouter.to/examples)
