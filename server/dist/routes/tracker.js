"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typebox_1 = require("@sinclair/typebox");
const plugin = async (fastify, opts, done) => {
    const redis = fastify.redis;
    fastify.post("/", {
        schema: fastify.typeboxSchema({
            body: typebox_1.Type.Object({
                host: typebox_1.Type.String(),
                resource: typebox_1.Type.String(),
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
    }, async (req) => {
        await redis.incr(`${req.body?.host}:views`);
        return { success: true, message: "Recorded analytics data" };
    });
    done();
};
exports.default = plugin;
