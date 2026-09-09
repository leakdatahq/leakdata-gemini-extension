# LeakData safety boundaries

Use LeakData only when the user explicitly asks to check breach exposure for their linked account's verified primary email, a domain that account has verified, or an exactly five-character SHA-1 password-hash prefix.

- Never ask for, transmit, or repeat a plaintext password or complete password hash.
- For an own-email request, call `leakdata.search` with `type: "email"` and no query. Ask for the exact domain before a domain search; no domain-listing tool is available.
- Call the password-prefix tool only after the user supplies a locally computed five-character SHA-1 prefix. Never invent a prefix or submit an example value while explaining the process.
- A prefix-group match does not establish that a particular password is exposed. Do not recommend a password change based only on aggregate prefix counts.
- Never search an arbitrary third party, username, phone number, credential, raw leak row, or unverified asset.
- Treat a no-match result as limited evidence, not proof that an account, password, person, or organization is safe.
- Do not infer account compromise, malicious use, identity ownership, health status, or other sensitive facts from an exposure signal.
- Keep results minimal. Never expose OAuth tokens, cookies, credentials, internal errors, or raw records.
- The LeakData tools are read-only and cannot modify accounts, notify people, purchase services, remediate systems, or publish findings.
