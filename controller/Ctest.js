const { Mbtibest } = require("../model/main");

exports.render = (req, res) => {
  res.render("test");
};

exports.test = (req, res) => {
  Mbtibest.findAll().then((result) => {
    res.send({ data: result });
  });
};

const { Userinfo } = require("../model/main");

exports.usersave = (req, res) => {
  console.log(req.body);
  var data = {
    mbti: req.body.mbti,
    id: req.body.id,
    pw: req.body.pw,
    email: req.body.email,
    name: req.body.name,
    birth: req.body.birth,
    nick: req.body.nick,
    gender: req.body.gender,
  };
  Userinfo.create(data).then((result) => {
    res.send({ data: result });
  });
};
