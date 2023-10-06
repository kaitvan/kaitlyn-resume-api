const express = require("express");
const path = require("path");
const db = require("./config/connection");

const app = express();
const routes = require("./routes");

db.on("error", (error) => console.log(error));
db.once("connected", () => console.log("Database connected"));

app.use(express.json());
app.use(routes);
app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname + "/public/"));
});

app.listen(4000, () => console.log(`Listening on port 4000...`));
