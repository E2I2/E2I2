const express = require("express");
const axios = require("axios");
const session = require("express-session");
const app = express();

const port = 8000;

app.set("view engine", "ejs");
app.use("/static", express.static("static"));
app.use("/axios", express.static("node_modules/axios"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// 세션
app.use(
  session({
    secret: "1234",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000,
    },
  })
);

const router = require("./routes");

app.use("/", router);

app.listen(port, () => {
  console.log("server open: ", port);
});
