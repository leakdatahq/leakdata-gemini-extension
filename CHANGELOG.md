# Changelog

## 1.0.0 — September 10, 2026

- Add a remote LeakData MCP connection for Antigravity CLI and Gemini CLI.
- Limit exposure searches to the linked account's verified primary email. Domain checks are unavailable in this release.
- Support five-character password hash-prefix checks without requesting a plaintext password or full hash.
- Require a prefix in the current message; general password questions do not trigger a check or reuse an earlier prefix.
- Validate package manifests with Gemini CLI 0.59.0 and Antigravity CLI 1.1.28; verify actual tool flows in Antigravity CLI 1.2.0 against MCP 1.3.2.
- Add clearer setup, plan, privacy and support guidance.
- Load Antigravity safety rules from the supported `rules/AGENTS.md` path.
- Keep exposure checks on the remote service, preserve explicit own-email queries and prevent unnecessary workspace inspection.

See [release evidence](RELEASE_CHECKLIST.md) for the current connection and publication status.
