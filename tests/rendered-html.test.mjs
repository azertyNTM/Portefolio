import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the portfolio and its concrete project context", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Alexis Automations — Portfolio de systèmes métier/);
  assert.match(html, /Des systèmes utiles/);
  assert.match(html, /Pas du bruit/);
  assert.match(html, /Speed-to-Lead/);
  assert.match(html, /Le contexte, avant la réponse/);
  assert.match(html, /Recherche B2B/);
  assert.match(html, /Agent vocal/);
  assert.match(html, /Démarrer la conversation/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/i);
});
