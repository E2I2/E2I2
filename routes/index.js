var express = require("express");
var controller = require("../controller/Cmain");
var controllerSign = require("../controller/Csign");
var controllerProfile = require("../controller/Cprofile");
const router = express.Router();

router.get("/", controller.main);

router.get("/signup", controllerSign.signup);
router.get("/signin", controllerSign.signin);
router.get("/find", controllerSign.find);

router.get("/profile", controllerProfile.profile);

module.exports = router;
