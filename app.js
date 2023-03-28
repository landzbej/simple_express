// const express = require("express");
// const routes = require('./routes/index');

// const app = express();
// const port = 3000;

// app.use('',routes);
// app.listen(port, () => console.log(`app is running on ${port}!`));

const express = require("express");

const app = express();
// const host = 'localhost';
const port = 3000;

// app.set("views", "./views");
// app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.send("hello");
});

// Listener
app.listen(port, () => {
  console.log(`Budget is listening on port ${port}!`);
});
