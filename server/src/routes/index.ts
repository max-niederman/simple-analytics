import { FastifyPluginCallback } from "fastify";
import fastifyTypebox from "@foodsy-app/fastify-typebox";
import tracker from "./tracker";

const plugin: FastifyPluginCallback = async (fastify, opts, done) => {
  fastify.register(fastifyTypebox);

  fastify.register(tracker, { prefix: "/tracker" });

  done();
};

export default plugin;
