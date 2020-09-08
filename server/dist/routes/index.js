"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugin = async (fastify, opts, done) => {
    fastify.post("/client", {
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
    }, async (req) => {
        if (typeof req.body !== "object")
            return;
        console.log({
            ...req.body,
            ip: req.ip,
        });
        return { success: true, message: "Recorded analytics data" };
    });
    done();
};
exports.default = plugin;
