"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const routes_1 = __importDefault(require("./routes"));
const app = fastify_1.default({ logger: true });
app.register(routes_1.default);
if (!module.parent) {
    const port = Number(process.env.PORT) || 3000;
    app.listen(port, "0.0.0.0").then(() => console.log(`Listening on port ${port}`));
}
