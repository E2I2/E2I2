const express = require("express");
const axios = require("axios");
const session = require("express-session");
const app = express();

const multer = require("multer");
const path = require("path");
const upload = multer({
  storage: multer.diskStorage({
  destination:(req,file,done)=>{
    done(null, "uploads")
  },
  filename : (req, file, done)=>{
    const ext = path.extname(file.originalname)
    const filename = path.basename(file.originalname,ext)+ '_' + Date.now() + ext
    done(null,filename)
  }
  }),
  limits: {fileSize : 5 * 1024 *1024 }
})
//multer


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
      maxAge: 5 * 60 * 60 * 1000,
    },
  })
);

const router = require("./routes");

app.use("/", router);

app.listen(port, () => {
  console.log("server open: ", port);
});
