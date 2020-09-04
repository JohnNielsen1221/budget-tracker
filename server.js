const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");
require("dotenv").config()

const PORT = process.env.PORT || 3001;
const MONGODB_URI = `mongodb+srv://John_Nielsen1221:${process.env.DB_PASS}@cluster0.ooxcd.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
});

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
