const session = require("express-session");
const { Userinfo, Sequelize } = require("../model/main");

exports.mypage = (req, res) => {
  res.render("myPage");
};

exports.editProfile = (req, res) => {
  const user = req.session.user;
  if (user != undefined) {
    Userinfo.findOne({
      where: {
        id: req.session.user[1],
        name: req.session.user[0],
      },
    }).then((result) => {
      var img = result.imgurl;
      var job = result.job;
      var interest = result.interest;
      var specialty = result.specialty;
      var desc = result.userdesc;
      res.render("editProfile", {
        img: img,
        job: job,
        interest: interest,
        specialty: specialty,
        desc: desc,
      });
    });
  } else {
    res.send(
      `<script>
        alert("잘못된 접근입니다. 로그인 후 이용해주세요.");
        location.href="/signin";
        </script>`
    );
  }
};

exports.editProfile_upload = (req, res) => {
  console.log("edit_profileInput", req.body.editFileAxios);
  if (req.body.editFileAxios != "undefined") {
    Userinfo.update(
      {
        imgurl: "/uploads/" + req.file.filename,
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
  } else {
    Userinfo.update(
      {
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
  }
};
