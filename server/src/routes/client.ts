import { FastifyPluginCallback } from "fastify";

const plugin: FastifyPluginCallback = async (fastify, opts, done) => {
  fastify.post(
    "/",
    {
      schema: {
        response: {
          200: {
            type: "object",
            properties: {
              success: { type: "boolean" },
              message: { type: "string" },
            },
          },
        },
      },
    },
    async (req) => {
      if (typeof req.body !== "object") return;

      console.log({
        ...req.body,
        ip: req.ip,
      });

      return { success: true, message: "Recorded analytics data" };
    },
  );

  done();
};

export default plugin;
