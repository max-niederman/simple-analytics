"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_typebox_1 = __importDefault(require("@foodsy-app/fastify-typebox"));
const tracker_1 = __importDefault(require("./tracker"));
const plugin = async (fastify, opts, done) => {
    fastify.register(fastify_typebox_1.default);
    fastify.register(tracker_1.default, { prefix: "/tracker" });
    done();
};
exports.default = plugin;
