var express = require('express')
var controller = require('../controller/Cmain')
var controllerSign = require('../controller/Csign')
var controllerChat = require('../controller/Cchat')
// var controllerProfile = require("../controller/Cprofile");

const router = express.Router();

router.get("/", controller.main);

<<<<<<< HEAD
router.get('/signup', controllerSign.signup)
router.post('/signup/post', controllerSign.signup_post)
router.get('/signin', controllerSign.signin)
router.post('/signin/post', controllerSign.signin_post)
router.get('/logout', controller.logout)
router.get('/find', controllerSign.find)
router.get('/profile', controllerSign.profile)
router.post('/profile/uploadImg', controllerSign.profile_upload)
router.get('/matching', controllerSign.matching)
router.get('/chatting', controllerChat.chat_main)
=======
router.get("/signup", controllerSign.signup);
router.post("/signup/post", controllerSign.signup_post);
router.get("/signin", controllerSign.signin);
router.post("/signin/post", controllerSign.signin_post);
router.get("/logout", controller.logout);
router.get("/find", controllerSign.find);
router.get("/profile", controllerSign.profile);
router.post("/profile/uploadImg", controllerSign.profile_upload);
router.get("/matching", controllerSign.matching);
>>>>>>> upstream/feature

module.exports = router;
