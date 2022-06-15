const express = require("express");
const app = express();
const mongoClient = require("mongodb").mongoClient;

const PORT = process.env.PORT || 3030;
require("dotenv").config();

// ========================
// Middlewares
// ========================
app.set("view engine", "ejs");
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
