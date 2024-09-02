const express = require("express");
const ejs = require("ejs");
const { time } = require("console");
const storage = require("node-persist");
storage.initSync(/* options ... */);
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", async (req, res) => {
  res.render("main");
});
app.get("/pokemonPush", async (req, res) => {
  const { pokemonData } = req.query;
  const data = JSON.parse(pokemonData);
  await storage.setItem(`pokemon${data.index}`, data);
  console.log(data);
  console.log("app.get pokemon", await storage.getItem(`pokemon${data.index}`));
  res.json({ data: "成功" });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
