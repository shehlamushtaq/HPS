const express = require("express");
const path = require("path");
const dbConnect = require("./config/db.js");
var cors = require("cors");
var cors = require("cors");

const registrationRoute = require("./routes/api/registration.js");
const welfareRoute = require("./routes/api/welfare.js");
const serviceRoute = require("./routes/api/service.js");
const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;
///=====================================connect to db
dbConnect();
app.listen(PORT, (req, res) => {
  console.log("My second Server is running at port: ", PORT);
});
//======================================route path
app.use("/api/registration", registrationRoute);
app.use("/api/welfare", welfareRoute);
app.use("/api/service", serviceRoute);
