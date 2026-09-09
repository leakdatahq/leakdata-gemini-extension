import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { test } from 'node:test'

const manifest = JSON.parse(await readFile(new URL('../gemini-extension.json', import.meta.url), 'utf8'))
const plugin = JSON.parse(await readFile(new URL('../plugin.json', import.meta.url), 'utf8'))
const antigravityMcp = JSON.parse(await readFile(new URL('../mcp_config.json', import.meta.url), 'utf8'))
const antigravityRule = await readFile(new URL('../rules/AGENTS.md', import.meta.url), 'utf8')
const context = await readFile(new URL('../GEMINI.md', import.meta.url), 'utf8')
const readme = await readFile(new URL('../README.md', import.meta.url), 'utf8')

test('manifest exposes only the first-party read-only LeakData MCP surface', () => {
  assert.equal(manifest.name, 'leakdata-gemini-extension')
  assert.match(manifest.version, /^\d+\.\d+\.\d+$/)
  assert.equal(manifest.contextFileName, 'GEMINI.md')
  assert.deepEqual(Object.keys(manifest.mcpServers), ['leakdata'])

  const server = manifest.mcpServers.leakdata
  assert.equal(server.httpUrl, 'https://leakdata.io/mcp')
  assert.equal(new URL(server.httpUrl).origin, 'https://leakdata.io')
  assert.deepEqual(server.includeTools, [
    'leakdata.search',
    'leakdata.password_prefix_check'
  ])
  assert.deepEqual(server.oauth, {
    enabled: true,
    scopes: ['search', 'password-check']
  })
  assert.equal('trust' in server, false)
  assert.equal('headers' in server, false)
  assert.equal('env' in server, false)
  assert.equal('clientId' in server.oauth, false)
  assert.equal('clientSecret' in server.oauth, false)
})

test('Antigravity plugin exposes the same first-party MCP server without embedded credentials', () => {
  assert.deepEqual(plugin, {
    $schema: 'https://antigravity.google/schemas/v1/plugin.json',
    name: 'leakdata',
    description: manifest.description
  })
  assert.deepEqual(Object.keys(antigravityMcp.mcpServers), ['leakdata'])

  const server = antigravityMcp.mcpServers.leakdata
  assert.deepEqual(server, { serverUrl: 'https://leakdata.io/mcp' })
  assert.equal(new URL(server.serverUrl).origin, 'https://leakdata.io')
  assert.equal('headers' in server, false)
  assert.equal('env' in server, false)
  assert.equal('oauth' in server, false)

  assert.match(antigravityRule, /verified primary email/)
  assert.match(antigravityRule, /Never ask for, transmit, or repeat a plaintext password/)
  assert.match(antigravityRule, /read-only/)
})

test('context and release copy preserve the verified-asset and password boundaries', () => {
  assert.match(context, /verified primary email/)
  assert.match(context, /exactly five hexadecimal characters/)
  assert.match(context, /Never ask for, transmit, or repeat a plaintext password/)
  assert.match(context, /read-only/)
  assert.match(context, /does not mark the LeakData MCP server as trusted/)
  assert.match(readme, /Antigravity CLI/)
})
