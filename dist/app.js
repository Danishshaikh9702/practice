"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = require("./routes/user.routes");
// import cors from 'cors'n
const app = (0, express_1.default)();
app.use("/users", user_routes_1.router);
// app.use(cors())
app.use("/", (req, res, next) => {
    res.json({ message: "Allo! Catch-all route." });
});
exports.default = app;
