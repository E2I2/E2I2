const session = require("express-session");

exports.main = (req, res) => {
  const user = req.session.user;
  if (user != undefined) {
    res.render("index", { isLogin: true, user: user });
  } else {
    res.render("index", { isLogin: false });
  }
};
