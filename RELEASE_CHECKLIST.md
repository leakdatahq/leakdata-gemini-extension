# Release evidence

Updated September 10, 2026. Package 1.0.0 connects to the live LeakData MCP 1.3.2 service. Source distribution, real client compatibility and Google directory approval are separate statuses.

## Real Antigravity acceptance

The [protected production rollout](https://github.com/leakdatahq/leakdata/actions/runs/34419230479) completed for commit `45840a219a8764d630a3cf0be0ec1035ee7ec9cd`. Public discovery reports MCP 1.3.2, with exactly two read-only tools. Ten public protocol checks passed.

A controlled account with a verified primary email and an active API-enabled plan completed normal browser OAuth consent in Antigravity CLI 1.1.28. The next ordinary launch reported CLI 1.2.0. The following fresh calls were then verified with Gemini 3.8 Flash (High) and package rules from commit `c9729b6858c23a52a30ff34f7a4475490a07ef38`:

| Case | Observed result |
| --- | --- |
| Own email, query omitted by the user | Actual search returned no breach exposure. The response described no-match as limited evidence. |
| Explicit controlled account email | New actual search returned no breach exposure, without workspace inspection or asset substitution. |
| Prefix 482C8 | New actual prefix call returned 1,925 candidate hashes. |
| Prefix 482c8 | New actual prefix call returned the same 1,925 candidate hashes. |
| Prefix 5BAA6 | New actual prefix call returned 1,978 candidate hashes. |
| General password question after a prefix call | No new tool call, invented prefix or reuse of the earlier prefix. |
| Unsupported domain | No tool call or substitute email check; the response explained the limitation. |
| Invalid prefix XYZ | No tool call; invalid length was explained. |
| Synthetic unverified third-party email | The server rejected the request. The response explained the ownership restriction without substituting the linked email. |
| Clearly labelled synthetic plaintext password | No tool call; the response explained local prefix preparation. |

Prefix responses described aggregate groups and did not claim that an individual password was exposed. The CLI exposed actual tool result text; its request JSON was not visible, so exact argument-payload inspection is not claimed.

An older persisted connection initially returned Unauthorized. Restart showed Auth Needed. New browser consent restored actual calls. The original cause was not established; no token stores were inspected. A first explicit-email prompt also attempted an unnecessary directory lookup; access was denied, rules were tightened, and the ordinary explicit-email case passed in a fresh session.

## Package validation

- Node.js 24.18.0 and npm 11.16.0: three package checks passed.
- Official Gemini CLI 0.59.0 validated and installed the extension. The available individual account could not run Gemini requests: [Google moved individual accounts to Antigravity](https://github.com/google-gemini/gemini-cli/discussions/28017). Actual Gemini compatibility still requires eligible enterprise or API access.
- Official Antigravity CLI 1.1.28 validated and installed the plugin. The pinned download matched Google's SHA-512 digest. CLI 1.2.0 also validated the final plugin locally.
- The installed `rules/AGENTS.md` was compared with the tested source and matched exactly.
- [Hosted validation](https://github.com/leakdatahq/leakdata-gemini-extension/actions/runs/34429876002) passed for the rules commit.
- Public documentation, account, pricing, privacy and OAuth links were checked. An active LeakData plan with API access is disclosed before connection.

## Final distribution checks

- [x] Restarted the connected MCP server and verified a fresh own-email call; the existing connection remained authenticated. This does not by itself prove a refresh-token exchange.
- [x] [Hosted validation passed](https://github.com/leakdatahq/leakdata-gemini-extension/actions/runs/34430880668) for final PR head `811e5023fff85ddfdf3c3fc3cb96d1f357336572` before merge.
- [x] Published the reviewed source at merge commit `be2cccc4791348be2ed942e7f006c666bb90451d` and [versioned release v1.0.0](https://github.com/leakdatahq/leakdata-gemini-extension/releases/tag/v1.0.0).
- [x] Cloned the public repository with Git credential helpers disabled, validated and installed that checkout using Antigravity CLI 1.2.0, and compared the installed rule with source.

The release ZIP was fetched without authentication at 02:53 UTC on September 10. It returned HTTP 200, contained 15 files, and matched the local package byte-for-byte: 41,987 bytes; SHA-256 `68c631ec67812868f4ae724f17cd73556a27e9025fb06214d24c6551ac37df06`.

## Limits and deferred checks

Domain searches were removed from MCP 1.3.2 after an actual 1.3.1 domain request timed out. They must not be described as available in this release.

Antigravity's authenticated MCP manager exposes Restart, Disable and Sign Out; an unauthenticated connection exposes Authenticate. Local sign-out, disablement or removal does not establish server-side token revocation. The application implements `/oauth/revoke`, but a user-facing OAuth connections page was not found. Server-side revocation remains unperformed.

Do not add the `gemini-cli-extension` discovery topic until actual Gemini compatibility is verified. Google's [gallery documentation](https://geminicli.com/docs/extensions/releasing/) requires a public repository, that topic and a root manifest; inclusion still depends on validation and indexing.

Google documents installation from the Antigravity MCP Store, but a public submission route has not been established. This source package does not claim Google store approval, native mobile compatibility or a completed Gemini live-account test.
