"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const routes_1 = require("./src/router/routes");
const error_1 = require("./src/middleware/error");
const app = (0, express_1.default)();
//middle
dotenv_1.default.config();
app.use((0, cors_1.default)());
// connection
const DB_URL = `${process.env.APP_HOST}://${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`;
mongoose_1.default.connect(DB_URL).then(() => {
    console.log("DB Connected");
});
mongoose_1.default.connection.on("error", (err) => {
    console.log(`DB Connected error: ${err.message}`);
});
app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
app.use(body_parser_1.default.json());
app.use("", routes_1.router);
app.use(error_1.errorHandler);
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log("sever is running port ", port);
});
