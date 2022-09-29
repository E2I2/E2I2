const session = require("express-session");
const { Userinfo, sequelize } = require("../model/main");

exports.chat_main = (req, res) => {
  Userinfo.findOne({
    where: {
      id: req.session.user[1],
    },
  }).then((result) => {
    res.render("chatting", {
      sendNick: result.nick,
    });
  });
};
