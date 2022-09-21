const mbtibest = (Sequelize, DataTypes) => {
  const model = Sequelize.define(
    "mbtibest",
    {
      mbti: {
        type: DataTypes.STRING(4),
        allowNull: false,
      },
      best: {
        type: DataTypes.STRING(4),
        allowNull: false,
      },
    },
    {
      tableName: "mbtibest",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return model;
};
module.exports = mbtibest;
