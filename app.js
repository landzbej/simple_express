const express = require("express");

const app = express();
//DELETE OR COMMENT OUT HOST
// const host = 'localhost';
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello");
});

// Listener DELETE OR DONT ADD HOST PARAM IN LISTENER
app.listen(port, () => {
  console.log(`Budget is listening on port ${port}!`);
});
