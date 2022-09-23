const Chat = (Sequelize, DataTypes) => {
  const model = Sequelize.define(
    "chat",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      chatlog: {
        type: DataTypes.TEXT("long"),
      },
      report: {
        type: DataTypes.INTEGER(3),
      },
      user1_nick: {
        type: DataTypes.STRING(8),
        allowNull: false,
      },
      user2_nick: {
        type: DataTypes.STRING(8),
        allowNull: false,
      },
    },
    {
      tableName: "chat",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return model;
};
module.exports = Chat;
