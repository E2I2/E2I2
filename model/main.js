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
db.Chatlist - require("./Chatlist")(sequelize, Sequelize);
db.Chatbox - require("./Chatbox")(sequelize, Sequelize);
db.Chatuser - require("./Chatuser")(sequelize, Sequelize);

// foreignKey 설정

db.Chatlist.hasMany(db.Chatbox, {
  foreignKey: "chatid2",
  sourceKey: "chatid1",
  onDelete: "cascade",
  onUpdate: "cascade",
});
db.Chatbox.belongsTo(db.Chatlist, {
  foreignKey: "chatid2",
  sourceKey: "chatid1",
  onDelete: "cascade",
  onUpdate: "cascade",
}); //chatlist - chatbox

db.Userinfo.hasMany(db.Chatuser, {
  foreignKey: "userid",
  sourceKey: "id",
  onDelete: "cascade",
  onUpdate: "cascade",
});
db.Chatuser.belongsTo(db.Userinfo, {
  foreignKey: "userid",
  sourceKey: "id",
  onDelete: "cascade",
  onUpdate: "cascade",
});

db.chatlist.hasMany(db.Chatuser, {
  foreignKey: "chatid3",
  sourceKey: "chatid1",
  onDelete: "cascade",
  onUpdate: "cascade",
});
db.Chatuser.belongsTo(db.Chatlist, {
  foreignKey: "chatid3",
  sourceKey: "chatid1",
  onDelete: "cascade",
  onUpdate: "cascade",
}); // chatuser  - userinfo,chatlist


module.exports = db;
