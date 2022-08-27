const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://amit007:Bullet%40500@cluster0.bqi3w.mongodb.net/oneCareHospital_DB?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("connecction successful");
  })
  .catch((err) => {
    console.log("reached");
    console.log(err);
  });
require("../model/user");
