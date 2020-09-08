import fastify from "fastify";

const app = fastify({ logger: true });

if (!module.parent) {
  const port = Number(process.env.PORT) || 3000;
  app.listen(port, "0.0.0.0").then(() => console.log(`Listening on port ${port}`));
}
