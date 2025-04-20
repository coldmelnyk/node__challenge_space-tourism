const express = require("express");
const dataJSON = require("./data.json");

const app = express();

app.use("/data", (req, res, next) => {
  setTimeout(() => {
    res.send(dataJSON);
  }, 3000);
});

app.use((req, res) => {
  res.status(404);
  res.send("Cant handle this request!");
});

app.listen(8080);
