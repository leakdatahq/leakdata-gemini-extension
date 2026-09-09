> September 10 release scope: MCP 1.3.2 supports verified-primary-email and supplied-prefix checks only. Domain requests must be declined without a tool call. The 1.3.1 Antigravity OAuth, email and prefix calls worked; its domain call timed out. Full 1.3.2 acceptance and public installation are pending. Earlier checkpoints below are historical.

# Release evidence

Prepared on September 9, 2026. Version 1.0.0 is a release candidate; no public release or Google directory inclusion is claimed.

## Completed

- Package tests passed with Node.js 24.18.0 and npm 11.16.0.
- Official Gemini CLI 0.59.0 validated and installed the extension.
- Official Antigravity CLI 1.1.28 validated and installed the plugin; the updated safety rule matches the installed copy.
- Google's Antigravity download was checked against its official SHA-512 digest.
- Public LeakData documentation, account, pricing, privacy and OAuth links were verified.
- Hosted validation passed for main commit `197898bf58d4ca37bf449d100ddf64026572a499` in [run 34407948925](https://github.com/leakdatahq/leakdata-gemini-extension/actions/runs/34407948925).
- A fresh Antigravity CLI 1.1.28 session outside this repository loaded `rules/AGENTS.md` from the installed plugin and correctly identified its supplied-prefix-only, no-plaintext and aggregate-result constraints. The previous custom rule filename passed package validation but was not loaded. This confirms rule discovery; authenticated tool checks remain pending.

## Required before release

- [ ] Deploy the current Antigravity OAuth and verified-email server corrections.
- [ ] Complete real OAuth consent, tool discovery and verified-asset queries.
- [ ] Verify password-prefix interpretation, invalid input, unverified asset and plaintext-password refusal.
- [ ] Verify the connection refresh and revocation behavior.
- [ ] Pass hosted validation for the final release commit.
- [ ] Verify installation from the public repository URL.

The available individual Google account was directed by Google's Gemini CLI to Antigravity. A real Gemini session still requires an eligible enterprise, Google Cloud or API environment. Do not add the Gemini gallery discovery topic until that compatibility is verified.

A public Antigravity MCP Store submission route has not been established. Package validation and a source release do not establish store or gallery inclusion.

## Revocation limitation

Antigravity CLI 1.1.28 currently exposes Restart, Disable and Authenticate in the LeakData MCP manager. These controls do not establish server-side OAuth revocation. LeakData implements token revocation at `/oauth/revoke`, but a user-facing OAuth connections page was not found in the current application source. The live revocation case remains unperformed; disabling the plugin or revoking unrelated login sessions must not be reported as a passing result.
