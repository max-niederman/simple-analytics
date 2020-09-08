import fastify from "fastify";
import routes from "./routes";

const app = fastify({ logger: true });

app.register(routes);

if (!module.parent) {
  const port = Number(process.env.PORT) || 3000;
  app.listen(port, "0.0.0.0").then(() => console.log(`Listening on port ${port}`));
}
