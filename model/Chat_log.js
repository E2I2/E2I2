const Chat_log = (Sequelize, DataTypes) => {
    const model = Sequelize.define(
        "chat_log",
        {
            id : {
                type : DataTypes.INTEGER,
                primaryKey : true,
                allowNull : false,
                autoIncrement : true
            },
            room_id : {
                type : DataTypes.INTEGER,
                allowNull : false
            },
            user_id : {
                type : DataTypes.STRING(15),
                allowNull : false
            },
            log : {
                type : DataTypes.TEXT('long')
            },
            timestamp : {
                type : DataTypes.DATE
            }
        },
        {
          tableName: "chat_log",
          freezeTableName: true,
          timestamps: false,
        }
    );
    return model;
};
module.exports = Chat_log