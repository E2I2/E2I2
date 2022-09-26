var express = require("express");
var controller = require("../controller/Cmain");
var controllerSign = require("../controller/Csign");
// var controllerProfile = require("../controller/Cprofile");

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
router.post("/profile/uploadImg", controllerSign.profile_upload);
router.get("/matching", controllerSign.matching);

module.exports = router;
