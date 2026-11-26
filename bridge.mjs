import { spawn } from "node:child_process";
import { once } from "node:events";
import { createInterface } from "node:readline";
import { fileURLToPath } from "node:url";

// goose probes for a newer MCP lifecycle before initialize. Answer this probe locally
// so a browser sign-in or cold npm download cannot outlive the probe and race its reply.
const input = createInterface({ input: process.stdin, crlfDelay: Infinity });
let bridge;
for await (const line of input) {
  if (!bridge) {
    let request;
    try { request = JSON.parse(line); } catch { /* Let the MCP transport handle malformed frames. */ }
    if (request?.method === "server/discover" && request.id != null) {
      process.stdout.write(JSON.stringify({
        jsonrpc: "2.0", id: request.id,
        error: { code: -32601, message: "Use the initialize handshake." }
      }) + "\n");
      continue;
    }
    bridge = spawn("npx", [
      "--yes", "mcp-remote@0.16.7", "https://mcp.agentrouter.to/",
      "--transport", "http-only", "--static-oauth-client-metadata", "@oauth-client.json"
    ], {
      cwd: fileURLToPath(new URL(".", import.meta.url)),
      stdio: ["pipe", "inherit", "inherit"],
      shell: process.platform === "win32"
    });
    bridge.on("error", error => { console.error(error.message); process.exit(1); });
    bridge.on("exit", code => process.exit(code ?? 1));
    bridge.stdin.on("error", error => { if (error.code !== "EPIPE") throw error; });
    process.once("SIGTERM", () => bridge.kill());
    process.once("SIGINT", () => bridge.kill());
  }
  if (!bridge.stdin.write(line + "\n")) await once(bridge.stdin, "drain");
}
bridge?.stdin.end();
