"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const app = fastify_1.default({ logger: true });
if (!module.parent) {
    const port = Number(process.env.PORT) || 3000;
    app.listen(port, "0.0.0.0").then(() => console.log(`Listening on port ${port}`));
}
