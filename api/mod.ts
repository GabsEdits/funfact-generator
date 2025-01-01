import { Hono } from "jsr:@hono/hono";

const app = new Hono();

app.use("*", (c, next) => {
  c.res.headers.set("Access-Control-Allow-Origin", "*");
  c.res.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS",
  );
  c.res.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return next();
});

app.get("/:lang/history", async (c) => {
  const lang = c.req.param("lang");
  const funFactsWithHistory = await import(`./${lang}/history.json`, {
    with: { type: "json" },
  });
  return c.json(funFactsWithHistory.default);
});

app.get("/:lang/science", async (c) => {
  const lang = c.req.param("lang");
  const funFactsWithScience = await import(`./${lang}/science.json`, {
    with: { type: "json" },
  });
  return c.json(funFactsWithScience.default);
});

app.get("/:lang/geography", async (c) => {
  const lang = c.req.param("lang");
  const funFactsWithGeography = await import(`./${lang}/geography.json`, {
    with: { type: "json" },
  });
  return c.json(funFactsWithGeography.default);
});

app.get("/:lang/random/history", async (c) => {
  const lang = c.req.param("lang");
  const funFactsWithHistory = await import(`./${lang}/history.json`, {
    with: { type: "json" },
  });
  const randomIndex = Math.floor(
    Math.random() * (funFactsWithHistory.default as string[]).length,
  );
  return c.json((funFactsWithHistory.default as string[])[randomIndex]);
});

app.get("/:lang/random/science", async (c) => {
  const lang = c.req.param("lang");
  const funFactsWithScience = await import(`./${lang}/science.json`, {
    with: { type: "json" },
  });
  const randomIndex = Math.floor(
    Math.random() * (funFactsWithScience.default as string[]).length,
  );
  return c.json((funFactsWithScience.default as string[])[randomIndex]);
});

app.get("/:lang/random/geography", async (c) => {
  const lang = c.req.param("lang");
  const funFactsWithGeography = await import(`./${lang}/geography.json`, {
    with: { type: "json" },
  });
  const randomIndex = Math.floor(
    Math.random() * (funFactsWithGeography.default as string[]).length,
  );
  return c.json((funFactsWithGeography.default as string[])[randomIndex]);
});

app.get("/:lang/random/random", async (c) => {
  const lang = c.req.param("lang");
  const funFactsWithHistory = await import(`./${lang}/history.json`, {
    with: { type: "json" },
  });
  const funFactsWithScience = await import(`./${lang}/science.json`, {
    with: { type: "json" },
  });
  const funFactsWithGeography = await import(`./${lang}/geography.json`, {
    with: { type: "json" },
  });
  const allFunFacts = [
    ...funFactsWithHistory.default,
    ...funFactsWithScience.default,
    ...funFactsWithGeography.default,
  ];
  const randomIndex = Math.floor(Math.random() * allFunFacts.length);
  return c.json(allFunFacts[randomIndex]);
});

app.notFound((c) => c.text("Not Found", 404));

Deno.serve(app.fetch);

export { app };
