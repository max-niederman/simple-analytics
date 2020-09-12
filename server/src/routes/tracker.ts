import { FastifyPluginCallback } from "fastify";
import { Type } from "@sinclair/typebox";
import { UAParser } from "ua-parser-js";
import getScreenType from "../utils/screen-types";

const plugin: FastifyPluginCallback = async (fastify, opts, done) => {
  const { redis } = fastify;

  fastify.post(
    "/",
    {
      schema: fastify.typeboxSchema({
        body: Type.Object({
          screenWidth: Type.Integer(),
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
      const url = new URL(req.headers["referer"]);
      const ua = new UAParser(req.headers["user-agent"]);
      const { browser, os } = ua.getResult();

      const pl = redis.pipeline();

      pl.hincrby(`${url.hostname}:resource`, url.pathname, 1);
      pl.hincrby(`${url.hostname}:size`, getScreenType(req.body!.screenWidth), 1);
      if (browser.name !== undefined) pl.hincrby(`${url.hostname}:browser`, browser.name, 1);
      if (os.name !== undefined) pl.hincrby(`${url.hostname}:os`, os.name, 1);

      await pl.exec();

      return { success: true, message: "Recorded analytics data" };
    },
  );

  done();
};

export default plugin;
