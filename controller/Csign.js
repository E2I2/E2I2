const { Userinfo, Sequelize } = require("../model/main");

exports.signup = (req, res) => {
  res.render("signup");
};

exports.signup_post = (req, res) => {
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
  Userinfo.findOne({
    where: {
      [Sequelize.Op.or]: [
        { id: req.body.id },
        { email: req.body.email },
        { nick: req.body.nick },
      ],
    },
  }).then((result) => {
    if (result == null) {
      Userinfo.create(data).then(() => {
        res.send("가입완료");
      });
    } else if (req.body.id == result.id) {
      res.send("같은 ID의 사용자가 있습니다.");
    } else if (req.body.email == result.email) {
      res.send("같은 email의 사용자가 있습니다.");
    } else if (req.body.nick == result.nick) {
      res.send("같은 닉네임 사용자가 있습니다.");
    }
  });
};

exports.signin = (req, res) => {
  res.render("signin");
};

exports.signin_post = (req, res) => {
  var data = {
    id: req.body.id,
    pw: req.body.pw,
  };
  Userinfo.findOne({
    where: {
      id: req.body.id,
      pw: req.body.pw,
    },
  }).then((result) => {
    if (result) {
      res.send("로그인완료");
    } else {
      res.send("ID와 PW를 확인하세요.");
    }
  });
};

exports.find = (req, res) => {
  res.render("find");
};
