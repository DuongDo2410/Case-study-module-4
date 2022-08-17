"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = __importDefault(require("./src/router/routes"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
//middle
dotenv_1.default.config();
app.use((0, cors_1.default)());
// connection
let DB_URL = process.env.MONGODB_URI ? process.env.MONGODB_URI : "";
mongoose_1.default.connect(DB_URL).then(() => {
    console.log("DB Connected");
});
mongoose_1.default.connection.on("error", (err) => {
    console.log(`DB Connected error: ${err.message}`);
});
app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
app.use(body_parser_1.default.json());
app.use("", routes_1.default);
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log("sever is running port ", port);
});