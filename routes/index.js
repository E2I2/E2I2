var express = require('express')
var controller = require('../controller/Cmain')
var controllerSign = require('../controller/Csign')
var controllerProfile = require('../controller/Cprofile')
// var testcontroller = require("../controller/Ctest");
const router = express.Router()

router.get('/', controller.main)

router.get('/signup', controllerSign.signup)
router.post('/signup/post', controllerSign.signup_post)
router.get('/signin', controllerSign.signin)
router.get('/find', controllerSign.find)

router.get('/profile', controllerProfile.profile)
router.get('/matching', controllerProfile.matching)

module.exports = router
