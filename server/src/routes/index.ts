import { FastifyPluginCallback } from "fastify";
import fastifyTypebox from "@foodsy-app/fastify-typebox";
import tracker from "./tracker";
import data from "./data";

const plugin: FastifyPluginCallback = async (fastify, opts, done) => {
  fastify.register(fastifyTypebox);

  fastify.register(tracker, { prefix: "/tracker" });
  fastify.register(data, { prefix: "/data" });

  done();
};

export default plugin;
