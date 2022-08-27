const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const UserRoute = require("./routes/userRoutes");
const BookRoute = require("./routes/bookRoutes");
const jwt = require("jsonwebtoken");

// For implementing the google calender.s
// const google = require("googleapis");
// const { OAuth2 } = google.auth;

// const oAuthClient = new OAuth2(
//   "255667656249-ak05nic4s60stt7d2rqh0hohc653p526.apps.googleusercontent.com",
//   "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"
// );

// oAuthClient.setCredentials({
//   refresh_token:
//     "1//04EVbalOwar1XCgYIARAAGAQSNwF-L9IrArDr8KTM9Xd05wcmOwjYNkvxkuzsdOLceBx9PQ3GsgOfLvHTwYIE9N89vRyw2eEiSDc",
// });

// const calender = google.calender({version:'v3',auth :oAuthClient })
// const create = require("./src/model/dbSetup");
// const errorlogger = require("./src/utility/errorLogger");
// const requestlogger = require(".src/utility/requestlogger");
require("./db/config");
// const routers = require("./src/routes/userRoutes");
const server = express();
// server.get("/setupDb", async (req, res, next) => {
//   try {
//     let data = await create.setupDb();
//     console.log(data);
//     res.send(data);
//   } catch (err) {
//     console.log(err);
//     res.send("Error occurred during insertion of data");
//   }
// });

// server.get("/test", async (req, res, next) => {
//   try {
//     let data = await tester();
//     console.log("--- Verification Completed ---");
//     res.send(data);
//   } catch (err) {
//     console.log(err.message);
//   }
// });
server.use(bodyParser.json());
server.use(cors());
server.use(function (req, res, next) {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.set("Access-Control-Allow-Credentials", true);
  next();
});
server.use("/user", UserRoute);
server.use("/book", BookRoute);
// const createToken = async () => {
//   const token = await jwt.sign(
//     { _id: "620cd2440d2e29bbb7b5ad0a" },
//     "asdfghjklzxcvbnmqwertyuiopxdfgh"
//   );
//   console.log(token);
//   const userVerify = await jwt.verify(token, "asdfghjklzxcvbnmqwertyuiopxdfgh");
//   console.log(userVerify);
// };
// createToken();
// server.use(requestlogger);
// server.use(routers);
// server.use(errorlogger);
server.listen(8000);
console.log("sever listening to port 8000");

module.exports = server;
