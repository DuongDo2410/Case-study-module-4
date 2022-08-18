import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import {router} from "./src/router/routes";
import {errorHandler} from "./src/middleware/error";
const app = express();
//middle
dotenv.config();
app.use(cors());

// connection
const DB_URL = `${process.env.APP_HOST}://${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`
mongoose.connect(DB_URL).then(() => {
  console.log("DB Connected");
});

mongoose.connection.on("error", (err) => {
  console.log(`DB Connected error: ${err.message}`);
});
app.use(express.static(path.join(__dirname, "../public")));
app.use(bodyParser.json());

app.use("", router);
app.use(errorHandler);
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("sever is running port ", port);
});
