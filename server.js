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
// const getAllDocs: async () => {
//   return await db.collection(coll).find().toArray();
// };

app.get("/", (req, res) => {
  db.collection("travels")
    .find()
    .toArray()
    .then((data) => {
      let country = data.map((el) => el.name);
      // console.log(country);
      res.render("index.ejs", { info: country });
    })
    .catch((error) => console.error(error));
});
app.post("/api", (req, res) => {
  console.log("post heard");
  db.collection("travels")
    .insertOne(req.body)
    .then((result) => {
      console.log(result);
      res.redirect("/");
    })
    .catch((error) => console.error(error));
});

app.listen(PORT, () => console.log("is runnig"));
