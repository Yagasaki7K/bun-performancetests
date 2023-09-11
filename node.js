const express = require("express");

const app = express();

app.get("/", async (req, res) => {
  const start = performance.now();

  res.send("Hello, World!");

  const end = performance.now();

  console.log(`Tempo de requisição: ${end - start}ms`);

  const time = performance.now() - start;

  res.send(`<p>Tempo de requisição: ${time}ms</p>`);
});

app.listen(3000);
