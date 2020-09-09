import { FastifyPluginCallback } from "fastify";
import { Type } from "@sinclair/typebox";

const plugin: FastifyPluginCallback = async (fastify, opts, done) => {
  const redis = fastify.redis;

  fastify.post(
    "/",
    {
      schema: fastify.typeboxSchema({
        body: Type.Object({
          host: Type.String(),
          resource: Type.String(),
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
      await redis.incr(`${req.body?.host}:views`);

      return { success: true, message: "Recorded analytics data" };
    },
  );

  done();
};

export default plugin;
