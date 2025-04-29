const express = require("express");
const app = express();
const path = require("path");
const port = 5100;

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.log(`server running at :${port}`);
});
