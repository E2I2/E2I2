var express = require('express')
var controller = require('../controller/Cmain')
var controllerSign = require('../controller/Csign')
var controllerChat = require('../controller/Cchat')
// var controllerProfile = require("../controller/Cprofile");


const multer = require("multer");
const path = require("path");
const upload = multer({
  storage: multer.diskStorage({
  destination:(req,file,done)=>{
    done(null, "uploads")
  },
  filename : (req, file, done)=>{
    const ext = path.extname(file.originalname)
    const filename = path.basename(file.originalname,ext) + ext
    done(null,filename)
  }
  }),
  limits: {fileSize : 5 * 1024 *1024 }
})

const router = express.Router();

router.get("/", controller.main);

router.get("/signup", controllerSign.signup);
router.post("/signup/post", controllerSign.signup_post);
router.get("/signin", controllerSign.signin);
router.post("/signin/post", controllerSign.signin_post);
router.get("/logout", controller.logout);
router.get("/find", controllerSign.find);
router.post("/find/id", controllerSign.find_id);
router.post("/find/pw", controllerSign.find_pw);

router.get("/profile", controllerSign.profile);
router.post('/profile/uploadImg', upload.single("userFileAxios"), controllerSign.profile_upload);
router.get("/matching", controllerSign.matching);
router.get("/chatting", controllerChat.chat_main);


module.exports = router;
