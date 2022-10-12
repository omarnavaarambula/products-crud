const express = require("express");

const db = require("./utils/database");
const app = express();
const config = require("./config.js");
const initModels = require("./models/initModels");

const productsRouter = require("./moveies/movies.router");

db.authenticate()

    .then(() => console.log("DB Authentication Succesfully"))
    .catch((err) => console.log(err));

db.sync()

    .then(() => console.log("database synced"))
    .catch((err) => console.log(err));

initModels();
app.use(express.json);

app.get("/", (req, res) => {
    res.status(200).json({ message: "ok" });
});

app.use("/products", productsRouter);

app.listen(config.port, () => {
    console.log(`Server started at port ${config.port}`);
});
