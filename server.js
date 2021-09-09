require("dotenv").config();
const express = require("express");
const connectToDb = require("./src/database/database");
const routes = require("./src/routes/routes")

connectToDb();

const app = express();
const port = 3000;

app.use(express.json());
app.use(routes);

app.listen(port, () =>
  console.info(`Servidor rodando em http://localhost:${port}`)
);
