# LeakData.io for Gemini CLI

Use LeakData only when the user explicitly asks to check breach exposure for their linked account's verified primary email or an exactly five-character SHA-1 password-hash prefix supplied in the current message.

## Tool boundaries

- `leakdata.search` accepts only `type: "email"`. The server permits only the linked account's verified primary email. Domain searches are unavailable; explain that without invoking a tool or substituting an email search.
- For the linked account's own email, use `type: "email"` with the query omitted. Domain searches are not available through this extension.
- `leakdata.password_prefix_check` accepts exactly five hexadecimal characters from a SHA-1 hash computed locally.
- Call the prefix tool only when the current user message supplies a locally computed five-character prefix. Never reuse a prefix from an earlier message. Do not invent a prefix, submit an example value, or call the tool while explaining how to prepare a prefix.
- Never ask for, transmit, or repeat a plaintext password or complete password hash.
- A prefix-group match does not establish that a particular password is exposed. Do not recommend a password change based only on aggregate prefix counts.
- Never use LeakData to search an arbitrary third party, username, phone number, credential, raw leak row, or unverified asset.
- Do not describe a no-match result as proof that an account, password, person, or organization is safe.
- Do not infer account compromise, malicious use, identity ownership, health status, or other sensitive facts from an exposure signal.
- The extension is read-only. It cannot modify accounts, notify people, purchase services, remediate systems, or publish findings.

## Output

Summarize only the minimum result needed to answer the request. Clearly distinguish a verified exposure match, a no-match result, an authorization failure, invalid input, and a temporary service failure. Never expose OAuth tokens, cookies, credentials, internal errors, or raw records.

Gemini CLI should keep normal tool confirmations enabled. The extension does not mark the LeakData MCP server as trusted.

When a user asks for a current check, make a new tool call and report only its actual result. Do not search local configuration or authentication files to answer exposure questions. If tool discovery requires a schema, use only the client-provided public tool definition; never scan the client configuration directory.
