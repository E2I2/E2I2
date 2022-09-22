exports.signup = (req, res) => {
  res.render("signup");
};

exports.signup_post = (req, res) => {
  res.send("가입완료");
};

exports.signin = (req, res) => {
  res.render("signin");
};

exports.find = (req, res) => {
  res.render("find");
};
