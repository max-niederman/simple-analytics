import { FastifyPluginCallback } from "fastify";
import { Type } from "@sinclair/typebox";
import castValues from "../utils/cast-values";

const plugin: FastifyPluginCallback = async (fastify, opts, done) => {
  const { redis } = fastify;

  fastify.get(
    "/",
    {
      schema: fastify.typeboxSchema({
        querystring: Type.Object({
          host: Type.String(),
        }),
      }),
    },
    async (req) => {
      const data = await redis
        .pipeline()
        .hgetall(`${req.query?.host}:resource`)
        .hgetall(`${req.query?.host}:size`)
        .hgetall(`${req.query?.host}:os`)
        .hgetall(`${req.query?.host}:browser`)
        .exec();

      return {
        success: true,
        resource: castValues(data[0][1], Number),
        size: castValues(data[1][1], Number),
        os: castValues(data[2][1], Number),
        browser: castValues(data[3][1], Number),
      };
    },
  );

  done();
};

export default plugin;
