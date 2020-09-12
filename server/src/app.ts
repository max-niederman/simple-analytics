import fastify from "fastify";
import fastifyCORS from "fastify-cors";
import fastifyRedis from "fastify-redis";
import routes from "./routes";

const app = fastify({ logger: true });

app.register(fastifyRedis, {
  host: process.env.REDIS_HOST || "127.0.0.1",
  port: Number(process.env.REDIS_PORT) || 6379,
});

app.register(fastifyCORS);
app.register(routes);

if (!module.parent) {
  const port = Number(process.env.PORT) || 3000;
  app.listen(port, "0.0.0.0").then(() => console.log(`Listening on port ${port}`));
}
