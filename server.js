const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");

const PORT = process.env.PORT || 3030;
require("dotenv").config();

// ========================
// Middlewares
// ========================
app.set("view engine", "ejs");
app.use(express.json());

MongoClient.connect(process.env.DB_CONNECT).then((client) =>
  console.log("hello")
);

// ========================
//Router
// ========================
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(PORT, () => console.log("is runnig"));
