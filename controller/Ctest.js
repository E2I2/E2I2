const { Mbtibest } = require("../model/main");

exports.test = (req, res) => {
  Mbtibest.findAll().then((result) => {
    console.log("a");
    res.render("test", { data: result });
    console.log(result);
  });
};
