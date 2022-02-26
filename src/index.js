const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send('<h1>Just a Vercel Deployment test</h1>');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});