const fs = require("fs");
const express = require("express");
require("dotenv").config();
const app = express();
const nodemailer = require("nodemailer");
const PORT = process.env.PORT || 6500;
app.use(express.static("public"));
app.use(express.json());

let visitorCount = 0;
fs.readFile("visitorCount.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error reading visitor count file:", err);
  } else {
    visitorCount = parseInt(data) || 0;
    console.log(`Initial visitor count: ${visitorCount}`);
  }
});
app.use((req, res, next) => {
  visitorCount++;
  fs.writeFile("visitorCount.txt", visitorCount.toString(), (err) => {
    if (err) {
      console.log("Error writing visitor count file:", err);
    }
  });
  console.log(`Visitor count: ${visitorCount}`);
  next();
});

app.get("/visitor-count", (req, res) => {
  res.json({ visitorCount });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
//posting to the gmail server.
app.post("/", (req, res) => {
  console.log(req.body);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });
  const mailOptions = {
    from: req.body.email,
    to: process.env.user,
    subject: `Message  from ${req.body.email}:${req.body.subject}`,
    text: req.body.message,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("error");
      res.send("error");
    } else {
      console.log(`Email sent : + ${info.response}`);
      res.send("sucess");
    }
  });
});
//listening port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
