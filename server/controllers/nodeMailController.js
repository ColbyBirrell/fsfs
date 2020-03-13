require("dotenv").config();
const nodemailer = require("nodemailer");

const { PASSWORD } = process.env;

const sendEmail = (req, res) => {
  console.log(req.body);
  const { email } = req.body;

  // Step 1
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "farmgoodsfs@gmail.com",
      pass: PASSWORD
    }
  });

  let emailText = `Hello ${email}, Thank you for signing up, we will send COVID-19  ...updates as needed`;
  // Step 2
  let mailOptions = {
    from: "farmgoodsfs@gmail.com",
    to: email,
    subject: "FGFS Mailer",
    text: emailText
  };

  // Step 3
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      res.status(409).send("Error Occured");
    } else {
      res.status(200).send("Message Sent!");
    }
  });
};

module.exports = {
  sendEmail
};
