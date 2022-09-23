const Chatuser = (Sequelize, DataTypes) => {
    const model = Sequelize.define(
        "chatuser",
        {
            chatuserid : {
                type : DataTypes.INTEGER,
                autoIncrement : true
            },
            chatid3 : {
                type : DataTypes.INTEGER,
                allowNull : false,
            },
            userid : {
                type : DataTypes.STRING(30),
                allowNull : false,
            }
        },
        {
            tableName: "chatuser",
            freezeTableName: true,
            timestamps: false,
        }
    )
}