import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routers from './src/router/routes';
import cors from "cors";
import path from "path";
const app = express();
//middle
dotenv.config();
app.use(cors());

// connection
let DB_URL: string = process.env.MONGODB_URI ? process.env.MONGODB_URI : "";
mongoose.connect(DB_URL).then(() => {
  console.log("DB Connected");
});

mongoose.connection.on("error", (err) => {
  console.log(`DB Connected error: ${err.message}`);
});
app.use(express.static(path.join(__dirname, "../public")));
app.use(bodyParser.json());

app.use("", routers);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("sever is running port ", port);
});
