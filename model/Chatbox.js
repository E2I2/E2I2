const Chatbox = (Sequelize, DataTypes) =>{
    const model = Sequelize.define(
        "chatbox",
        {
            chatboxid : {
                type : DataTypes.INTEGER,
                autoIncrement : true,
                primaryKey : true,
            },
            chatid2 : {
                type : DataTypes.INTEGER,
                allowNull : false,
            },
            chatlog : {
                type : DataTypes.Text("long"),
            }
        },
        {
            tableName: "chatbox",
            freezeTableName: true,
            timestamps: false,
        }
    );
    return model;
};
module.exports = Chatbox;