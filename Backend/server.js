const fs = require("fs");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const nodemailer = require("nodemailer");
const path = require("path");
const PORT = process.env.PORT || 5500;

const corsOptions = {
  origin: [
    "http://localhost:5500",
    "https://www.manikumarchintala.com",
    "https://manikumarchintala.com",
  ],
};
app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, "frontend", "dist")));
app.use(express.json());

let visitorCount = 0;
const visitorFilePath = path.join(__dirname, "/visitorCount.txt");

fs.readFile(visitorFilePath, "utf8", (err, data) => {
  if (err) {
    console.log("Error reading visitor count file:", err);
  } else {
    visitorCount = parseInt(data) || 0;
    console.log(`Initial visitor count: ${visitorCount}`);
  }
});

app.use((req, res, next) => {
  if (req.path !== "/visitorcount") {
    visitorCount++;
    fs.writeFile(visitorFilePath, visitorCount.toString(), (err) => {
      if (err) {
        console.log("Error writing visitor count file:", err);
      }
    });
    console.log(`Visitor count: ${visitorCount}`);
  }
  next();
});

app.get("/visitorcount", (req, res) => {
  res.json({ visitorCount });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

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
    subject: `Message from ${req.body.name}: ${req.body.email}`,
    text: req.body.subject,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email:", error);
      res.status(500).send("Error sending email.");
    } else {
      console.log(`Email sent: ${info.response}`);
      res.send("Success! Your message has been sent.");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
