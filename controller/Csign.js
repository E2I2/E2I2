const session = require("express-session");
const { DATE } = require("sequelize");
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
  Userinfo.findOne({
    where: {
      id: req.body.id,
      pw: req.body.pw,
    },
  }).then((result) => {
    if (result && req.body.sessions == "on") {
      req.session.user = [result.name, result.id];
      console.log(req.session);
      res.send("로그인완료");
    } else if (result && req.body.sessions == undefined) {
      req.session.user = [result.name, result.id];
      req.session.cookie.originalMaxAge = 2 * 60 * 60 * 1000;
      console.log(req.session);
      res.send("로그인완료");
    } else if (!result) {
      res.send("ID와 PW를 확인하세요.");
    }
  });
};

// 아이디 비밀번호 찾기
exports.find = (req, res) => {
  res.render("find");
};

exports.find_id = (req, res) => {
  res.send("아이디찾기성공");
};

exports.find_pw = (req, res) => {
  res.send("비밀번호찾기성공");
};

// profile

exports.profile = (req, res) => {
  Userinfo.findOne({
    where: {
      id: req.session.user[1],
      name: req.session.user[0],
    },
  }).then((result) => {
    var date = new Date();
    var year = date.getFullYear();
    var resultbirth = result.birth;
    var userbirth = resultbirth.substr(0, 4);
    var age = year - userbirth + 1;
    var mbti = result.mbti.toUpperCase();
    res.render("profile", { nick: result.nick, mbti: mbti, age: age });
  });
};

exports.profile_upload = (req, res) => {
  console.log(req.body);
  console.log(req.file.filename);
  


  Userinfo.findOne({
    where: {
      id: req.session.user[1],
      name: req.session.user[0],
    }
  }).then((result)=>{
    res.send("업로드완료");
  })
  
};
exports.matching = (req, res) => {
  res.render("matching");
};
