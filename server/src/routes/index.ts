import { FastifyPluginCallback } from "fastify";
import client from "./client";

const plugin: FastifyPluginCallback = async (fastify, opts, done) => {
  fastify.register(client, { prefix: "/client" });

  done();
};

export default plugin;
