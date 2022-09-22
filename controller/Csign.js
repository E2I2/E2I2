const { Userinfo } = require("../model/main");

exports.signup = (req, res) => {
  res.render("signup");
};

exports.signup_post = (req, res) => {
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
    res.send("가입완료");
  });
};

exports.signin = (req, res) => {
  res.render("signin");
};

exports.find = (req, res) => {
  res.render("find");
};
