const express = require("express");

const app = express();
const host = 'localhost';
const port = 3000;

app.set("views", "./views");
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render('layout');
});

// Listener
app.listen(port, host, () => {
  console.log(`Budget is listening on port ${port} of ${host}!`);
});