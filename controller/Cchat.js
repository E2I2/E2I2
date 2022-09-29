const session = require("express-session");
const { Userinfo, sequelize, Chat_room } = require("../model/main");

exports.chat_main = (req, res) => {
  Userinfo.findOne({
    where: {
      id: req.session.user[1],
    }
  }).then((result) => {
    res.render("chatting", {
      sendNick: result.nick,
      params: req.params.id
    });
    // res.render("chatting/:id", {
    //   sendNick: result.nick,
    //   params:req.params.id
    // });
    // console.log(sendNick);
    console.log(req.params.id)
    console.log(result.data);
  });
};
