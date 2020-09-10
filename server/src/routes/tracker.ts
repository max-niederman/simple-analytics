import { FastifyPluginCallback } from "fastify";
import { Type } from "@sinclair/typebox";

const plugin: FastifyPluginCallback = async (fastify, opts, done) => {
  const redis = fastify.redis;

  fastify.post(
    "/",
    {
      schema: fastify.typeboxSchema({
        body: Type.Object({
          url: Type.String(),
        }),
        response: {
          200: {
            type: "object",
            properties: {
              success: { type: "boolean" },
              message: { type: "string" },
            },
          },
        },
      }),
    },
    async (req) => {
      const url = new URL(req.body!.url);
      
      await redis.hincrby(`${url.hostname}:resources`, url.pathname, 1);

      return { success: true, message: "Recorded analytics data" };
    },
  );

  done();
};

export default plugin;
