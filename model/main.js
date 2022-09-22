const Sequelize = require("sequelize");
const config = require("../config/config.json")["mysql"];

const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Userinfo = require("./Userinfo")(sequelize, Sequelize);
db.Mbtibest = require("./Mbtibest")(sequelize, Sequelize);
db.Mbtigood = require("./Mbtigood")(sequelize, Sequelize);
db.Mbtisoso = require("./Mbtisoso")(sequelize, Sequelize);
db.Mbtibad = require("./Mbtibad")(sequelize, Sequelize);
db.Chat = require("./Chat")(sequelize, Sequelize);

// foreignKey 설정
db.Userinfo.hasMany(db.Chat, {
  foreignKey: "user_ID",
  sourceKey: "id",
  onDelete: "cascade",
});
db.Chat.belongsTo(db.Userinfo, {
  foreignKey: "user_ID",
  sourceKey: "id",
  onDelete: "cascade",
});

module.exports = db;
