const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
const mongoose = require("mongoose");
const demoRouter = require("./routes/sample.js");
// app.use(require("./routes/record"));
// // get driver connection
// const dbo = require("./db/conn");
 
// mongoose.connect(
//     process.env.ATLAS_URI, 
//     {
//       useNewUrlParser: true,
//       useFindAndModify: false,
//       useUnifiedTopology: true
//     }
//   );

try {
    // Connect to the MongoDB cluster
     mongoose.connect(
        process.env.ATLAS_URI,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log(" Mongoose is connected")
    );

  } catch (e) {
    console.log("could not connect");
  }

app.use(demoRouter);



app.listen(3000, () => {
  console.log("Server is running at port 3000");
});