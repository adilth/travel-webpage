const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");

const PORT = process.env.PORT || 3030;
require("dotenv").config();

// ========================
// Middlewares
// ========================
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let db;

MongoClient.connect(process.env.DB_CONNECT).then((client) => {
  console.log("hello");
  db = client.db("test");
  // let travelCollection = db.collection("travels");
});

// ========================
//Router
// ========================
app.get("/", (req, res) => {
  db.collection("travels")
    .find()
    .toArray()
    .then((data) => {
      console.log(data);
      res.render("index.ejs", { info: data });
    })
    .catch((error) => console.error(error));
});

app.listen(PORT, () => console.log("is runnig"));
