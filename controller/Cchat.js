const session = require("express-session");
const { Userinfo, sequelize, Sequelize, Chat_room, Chat_participant } = require("../model/main");

exports.chat_main = async (req, res) => {
  var sql = `select room_id, count(*) as count from chat_participant where user_id = '${req.session.user[1]}' or user_id = '${req.params.id}' group by room_id having(count >= 2);`

  var data = {};
  var room = await sequelize.query(sql,  { type: Sequelize.QueryTypes.SELECT });
  console.log(room, room.length);
  if (room.length == 0){
    var newRoom = await Chat_room.create({room_title: `${req.session.user[1]}+${req.params.id}`});
    console.log(newRoom);
    await Chat_participant.create({room_id: newRoom.room_id, user_id: req.session.user[1]})
    await Chat_participant.create({room_id: newRoom.room_id, user_id: req.params.id})
    data.room_id = newRoom.room_id;
  } else { 
    data.room_id = room[0].room_id;
  }

  var me = await Userinfo.findOne({
    where: {
      id: req.session.user[1],
    }
  })

  data.me = await me.nick;

  var rec = Userinfo.findOne({
    where: {
      id: req.params.id,
    }
  })

  data.rec = rec.nick;

  res.render("chatting", data);

};
