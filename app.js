const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const router = require("./routers");
dotenv.config({ path: "./.env" });
const app = express();
const cors= require("cors")
const dbURI = process.env.DATABASE;
const port = process.env.PORT;

app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());
app.use(router);
mongoose
  .connect(dbURI)
  .then((result) => {
    app.listen(port);
    console.log("connected to mongodb and listening ",port);
  })
  .catch((err) => console.error(err));

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
