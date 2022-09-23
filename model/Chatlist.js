const Chatlist = (Sequelize, DataTypes) =>{
    const model = Sequelize.define(
        "chatlist",
        {
            chatid1 : {
                type : DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey : true,
            },
            title : {
                type : DataTypes.STRING(20),
                allowNull : false,
            }
        },
        {
            tableName: "chatlist",
            freezeTableName: true,
            timestamps: false,
        }
    );
    return model;
};
module.exports = Chatlist;