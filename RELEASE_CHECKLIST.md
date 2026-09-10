# Release evidence

Updated September 10, 2026. Package 1.0.0 is a release candidate for MCP server 1.3.2. Public release and directory inclusion remain pending.

## Verified preparation

- Package checks passed with Node.js 24.18.0 and npm 11.16.0.
- Official Gemini CLI 0.59.0 validated and installed the extension. The available individual Google account could not run Gemini requests: [Google moved individual accounts to Antigravity](https://github.com/google-gemini/gemini-cli/discussions/28017). A real Gemini session still requires eligible enterprise or API access.
- Official Antigravity CLI 1.1.28 validated and installed the plugin. Its download matched Google's SHA-512 digest.
- A fresh Antigravity session loaded the installed `rules/AGENTS.md` from source commit `66a615c96492983dbe07b4f80d4f640e129ae6e4`. It identified the current-message prefix requirement, domain restriction and aggregate-result limits. This verifies rule loading, not authenticated server acceptance.
- [Hosted validation passed](https://github.com/leakdatahq/leakdata-gemini-extension/actions/runs/34418467035) for that commit.
- Public documentation, account, pricing, privacy and OAuth links were checked.

## Live checkpoint before 1.3.2

On September 9–10, Antigravity CLI 1.1.28 completed OAuth using Google's published client metadata and the controlled LeakData review account. Its verified-email and supplied-prefix calls worked on MCP 1.3.1. An actual domain call timed out. Domain checks were removed from the 1.3.2 MCP scope and must not be described as supported.

These older calls do not establish acceptance of the pending 1.3.2 release.

## Required before public release

- [ ] Complete the protected production rollout of MCP 1.3.2 and verify its exact public metadata.
- [ ] Complete real client consent, discovery and fresh verified-primary-email calls.
- [ ] Check uppercase and lowercase supplied prefixes and a second sample. Describe aggregate results accurately.
- [ ] Verify domain requests, third-party email requests, invalid prefixes, general password questions and plaintext handling without invented or reused queries.
- [ ] Restart the connection and complete a fresh tool call.
- [ ] Pass hosted validation for the final release commit.
- [ ] Publish the reviewed package and verify its public installation without GitHub credentials.

## Client limitations

Antigravity CLI 1.1.28 exposes Restart, Disable and Authenticate in its MCP manager. These controls do not establish server-side OAuth revocation. LeakData implements `/oauth/revoke`, but a user-facing OAuth connections page was not found in the current application. Revocation remains unperformed; local disablement or removal must not be recorded as a passing revocation test.

Do not add the `gemini-cli-extension` discovery topic until actual Gemini compatibility is verified. Google's [gallery documentation](https://geminicli.com/docs/extensions/releasing/) requires a public repository, that topic and a root manifest; inclusion still depends on validation and indexing.

Google documents installation from the Antigravity MCP Store, but a public submission route has not been established. A validated source package does not establish Google store approval.
