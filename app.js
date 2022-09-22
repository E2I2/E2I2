const express = require("express");
const axios = require("axios");
const app = express();
// const http = require("http").Server( app ); 
// const io = require( "socket.io" )( http );
const port = 8000;


app.set("view engine", "ejs");
app.use("/static", express.static("static"));
app.use("/axios", express.static("node_modules/axios"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const router = require("./routes");
app.use("/", router);

// var nick_array = {};

// io.on( "connection", function ( socket ){
//   console.log( "Server Socket Connected", socket.id );
//   // 채팅 참가자 리스트(배열) 추가 
//   socket.on( "setNick", ( nick ) => { 
//           nick_array[socket.id] = nick; 
//           io.emit( "notice", `${nick}님이 입장하셨습니다.`);
//           socket.emit( "entrySuccess", nick );
//       }
//   });






app.listen(port, () => {
  console.log("server open: ", port);
});
