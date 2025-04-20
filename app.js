const express = require("express");
const dataJSON = require("./data.json");

const app = express();

app.use("/data", (req, res, next) => {
  res.send(dataJSON);
});

app.use((req, res) => {
  res.status(404);
  res.send('Cant handle this request!');
});

app.listen(8080);
