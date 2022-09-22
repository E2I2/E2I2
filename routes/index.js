var express = require("express");
var controller = require("../controller/Cmain");
var controllerSign = require("../controller/Csign");
var controllerProfile = require("../controller/Cprofile");
var testcontroller = require("../controller/Ctest");
// var controllerChat  = require("../controller/Cchat")
const router = express.Router();

router.get("/", controller.main);
// 서버 테스트 페이지
router.get("/test", testcontroller.test);

router.get("/signup", controllerSign.signup);
router.post("/signup/post", controllerSign.signup_post);
router.get("/signin", controllerSign.signin);
router.get("/find", controllerSign.find);

router.get("/profile", controllerProfile.profile);
router.get("/matching", controllerProfile.matching);
// router.get("/chatting", controllerChat.chatting);

module.exports = router;
