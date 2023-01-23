const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

// thard party middleWare
app.use(cors());
app.use(express.json());

// route
const jopPostRoute = require("./Routes/jopPost.route");
const hiringManagerInfo = require("./Routes/hiringManagerInfo.route");
const userRoute = require("./Routes/userSignup.route");

app.use("/jobs", jopPostRoute);
app.use("/manager/jobs", hiringManagerInfo);
app.use("/user", userRoute);

app.get("/", (req, res) => {
  res.send(`
  Job-Portal server is connected!! <br/>
  <a href="https://github.com/Foy5al/node-job-portal#nodejs-job-portal-api" target="_blank"> Click here for documentation </a>
  `);
});

module.exports = app;
