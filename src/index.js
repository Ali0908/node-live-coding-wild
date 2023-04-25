const express = require("express");
const typeorm = require("typeorm")
const app = express();
const Wilder = require ("./entity/Wilder");

const dataSource = new typeorm.DataSource({
  type: "sqlite",
  database: ".wildersdbs.sqlite",
  synchronize: true,
  entities: [require("./entity/Wilder")],
  logging :["query","error"]
});
app.get("/", (req, res) => {
  res.send("Hello World");
});

const start = async () => {
  await dataSource.initialize();
  dataSource.getRepository(Wilder).save({name: "First Wilder"});
  app.listen(3000, () => console.log("Server started on 3000"));
};
//Start Server
start();

