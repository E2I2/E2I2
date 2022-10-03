const session = require("express-session");
const { format } = require("mysql2");
const {
  Userinfo,
  sequelize,
  Sequelize,
  Chat_room,
  Chat_participant,
} = require("../model/main");

exports.chat_main = async (req, res) => {
  var sql = `select room_id, count(*) as count from chat_participant where user_id = '${req.session.user[1]}' or user_id = '${req.params.id}' group by room_id having(count >= 2);`;

  var data = {};
  var room = await sequelize.query(sql, { type: Sequelize.QueryTypes.SELECT });
  console.log("room, room.length");
  if (room.length == 0) {
    var newRoom = await Chat_room.create({
      room_title: `${req.session.user[1]}+${req.params.id}`,
    });
    console.log("newRoom", newRoom);
    await Chat_participant.create({
      room_id: newRoom.room_id,
      user_id: req.session.user[1],
    });
    await Chat_participant.create({
      room_id: newRoom.room_id,
      user_id: req.params.id,
    });

    data.room_id = newRoom.room_id;
  } else {
    console.log("room[0].room_id");
    data.room_id = room[0].room_id;
  }

  var me = await Userinfo.findOne({
    where: {
      id: req.session.user[1],
    },
  });

  data.me = await me.nick;

  var rec = Userinfo.findOne({
    where: {
      id: req.params.id,
    },
  });

  data.rec = rec.nick;

  res.render("chatting", data);
};

exports.chatList = (req, res) => {
  Chat_room.findAll({}).then((result) => {
    console.log(result);
    var data = [];
    for (let i of result) {
      if (i.dataValues.room_title.indexOf(req.session.user[1]) != -1) {
        let dummy = i.dataValues.room_title.replace(req.session.user[1], "");

        data.push(dummy.replace("+", ""));
      }
    }
    console.log(data);
    res.send({ data: data });
  });
};

exports.saveDB = async (req, res) => {
  console.log("req.body");
  var theRoom = await Chat_room.findOne({
    attribute: ["content"],
    where: {
      room_id: req.body.room_id,
    },
  });
  if (theRoom.dataValues.content == null) {
    Chat_room.update(
      {
        content: req.body.content,
        timestamp: req.body.timestamp,
      },
      {
        where: {
          room_id: req.body.room_id,
        },
      }
    );
  } else if (theRoom.dataValues.content != null) {
    Chat_room.update(
      {
        content: Sequelize.fn(
          "CONCAT",
          Sequelize.col("chat_room.content"),
          req.body.content
        ),
        timestamp: req.body.timestamp,
      },
      {
        where: {
          room_id: req.body.room_id,
        },
      }
    );
  }
}; //DB > chatting : 'content' 대화 로그 저장

exports.getDB = (req, res) => {
  Chat_room.findOne({
    where: {
      room_id: req.body.room_id,
    },
  }).then((result) => {
    console.log(result.dataValues);
    if (result.dataValues.content == null) {
    } else {
      res.send(result.dataValues.content.split("//"));
    }
  });
};
