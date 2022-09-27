const session = require("express-session");
const { Userinfo, Sequelize } = require("../model/main");

exports.mypage = (req, res) => {
  res.render("myPage");
};

exports.editProfile = (req, res) => {
  res.render("editProfile");
};
