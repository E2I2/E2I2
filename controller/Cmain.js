const session = require("express-session");

exports.main = (req, res) => {
  const user = req.session.user;
  if (user != undefined) {
    res.render("index", { isLogin: true, user: user });
  } else {
    res.render("index", { isLogin: false });
  }
};

exports.logout = (req, res) => {
  const user = req.session.user;
  if (user != undefined) {
    req.session.destroy((err) => {
      res.send(
        `<script>
          location.href="/";
        </script>`
      );
    });
  } else {
    res.send(
      `<script>
      aleart("잘못된 접근입니다.");
      location.href="/";
      </script>`
    );
  }
};
