const session = require("express-session");
const { Userinfo, Sequelize } = require("../model/main");

exports.mypage = (req, res) => {
  res.render("myPage");
};

exports.editProfile = (req, res) => {
  res.render("editProfile");
};

exports.editProfile_upload = (req, res) => {
  console.log("edit_profileInput", req.body);
  console.log("edit_Filename:", req.file.filename);

  Userinfo.update(
    {
      imgurl: "./uploads/" + req.file.filename,
      job: req.body.job,
      interest: req.body.interest,
      specialty: req.body.specialty,
      userdesc: req.body.userdesc,
    },
    {
      where: {
        id: req.session.user[1],
      },
    }
  ).then((result) => {
    res.send("프로필수정완료");
  });
};
