# LeakData safety boundaries

Use LeakData only when the user explicitly asks to check breach exposure for their linked account's verified primary email or an exactly five-character SHA-1 password-hash prefix supplied in the current message.

- Never ask for, transmit, or repeat a plaintext password or complete password hash.
- For an own-email request, call `leakdata.search` with `type: "email"` and no query. Domain searches are unavailable: explain the limitation without calling a tool or substituting an email check.
- If the user gives their email explicitly, preserve that address in `query`; the server verifies that it matches the linked account. Never replace a rejected explicit address with an implicit own-email check.
- Call the password-prefix tool only when the current user message supplies a locally computed five-character SHA-1 prefix. Never reuse a prefix from an earlier message. Never invent a prefix or submit an example value while explaining the process.
- A prefix-group match does not establish that a particular password is exposed. Do not recommend a password change based only on aggregate prefix counts.
- Never search an arbitrary third party, username, phone number, credential, raw leak row, or unverified asset.
- Treat a no-match result as limited evidence, not proof that an account, password, person, or organization is safe.
- Do not infer account compromise, malicious use, identity ownership, health status, or other sensitive facts from an exposure signal.
- Keep results minimal. Never expose OAuth tokens, cookies, credentials, internal errors, or raw records.
- The LeakData tools are read-only and cannot modify accounts, notify people, purchase services, remediate systems, or publish findings.

When a user asks for a current check, make a new tool call and report only its actual result. Exposure checks use the remote LeakData service. Do not inspect or list workspace files, parent directories, local configuration or authentication files to answer them or infer account ownership. If tool discovery requires a schema, use only the client-provided public tool definition; never scan the client configuration directory.
