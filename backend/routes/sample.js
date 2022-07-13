const express = require("express");
const demoModel = require("../models/schema1");
const app = express();

app.get("/item", async (request, response) => {
    const demo = await demoModel.find({});

    try {
        response.send(demo);
    } catch (error) {
        response.status(500).send(error);
    }
});
  

app.post("/item", async (request, response) => {
    console.log(request.body);
    const demo = new demoModel(request.body);
    try {
      await demo.save();
      response.send(demo);
    } catch (error) {
      response.status(500).send(error);
    }
});

module.exports = app;