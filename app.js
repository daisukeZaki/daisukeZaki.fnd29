const express = require("express");
const ejs = require("ejs");
// const { time } = require("console");
const ejsmate = require("ejs-mate");
const path = require("path");

const app = express();

app.use(express.static("public"));

app.engine("ejs", ejsmate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", async (req, res) => {
  res.render("main");
});
app.get("/details", (req, res) => {
  const { pokemonId } = req.query;
  console.log(`pokemonId${pokemonId}`);

  res.render("details");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
