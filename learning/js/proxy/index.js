const express = require("express");
const app = express();
app.use(express.static("public"));

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World!\n");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
