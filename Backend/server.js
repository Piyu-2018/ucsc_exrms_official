const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "u117929562_ucscexrms",
});

connection.connect();

//middleware
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

// routes
const authRouter = require("./routes/authRoutes");
const settingsRouter = require("./routes/settingsRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());

// routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/settings", settingsRouter);

app.use(notFound);
app.use(errorHandler);

//port
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server is listening on port 5000");
});