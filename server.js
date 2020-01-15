const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const movieRouter = require("./routes/movie");
const scraperRouter = require("./routes/scraper");

const db = require("./confiq/db");
const { PORT } = require("./confiq/variableEnv");

const app = express();
const port =  3003;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


if (db) {
  console.log("server connected to d");
} else {
  console.log({ message: "error connect", error });
}
db.then(() => {
  console.log("connect");
}).catch(error => {
  console.log("error", error);
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "./public/index.html"));
});

app.use("/movie", movieRouter);
app.use("/scraper", scraperRouter);


app.listen(port, () => {
  console.log(`Example Listening in ${port}`);
});
