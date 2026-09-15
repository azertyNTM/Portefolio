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

test("server-renders the Lysere commercial homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Lysere — Automatisation de processus sur mesure/);
  assert.match(html, /J’automatise vos/);
  assert.match(html, /processus\./);
  assert.match(html, /Parler de votre processus/);
  assert.match(html, /Beaucoup de travail ne devrait/);
  assert.match(html, /Votre processus d’abord/);
  assert.match(html, /Vos outils restent/);
  assert.match(html, /Commencez par le travail/);
  assert.match(html, /Discuter de votre processus/);
  assert.doesNotMatch(html, /Speed-to-Lead|Recherche B2B|Agent vocal|Voir mes réalisations/);
  assert.doesNotMatch(html, /bonjour@votredomaine\.fr/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/i);
});
