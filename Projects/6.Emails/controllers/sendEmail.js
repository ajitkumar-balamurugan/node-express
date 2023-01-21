const nodemailer = require("nodemailer");
const sgMail = require("@sendgrid/mail");
const Mailgun = require("mailgun-js");
const formData = require("form-data");
const sendEmailEthereal = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "lloyd.stamm37@ethereal.email",
      pass: "BtyvnRU5NyEFdRnKdK",
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  res.send(info);
};
const sendEmailSendGrid = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "anbudanajit@gmail.com", // Change to your recipient
    from: "akbonnet@protonmail.com", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };
  const info = await sgMail.send(msg);
  res.send(info);
};

const sendEmailMailGun = async (req, res) => {
  //   //   const DOMAIN = "sandboxed1f98f403cf4e0a8e0d44faa2829e73.mailgun.org";
  //   const mg = mailgun({
  //     apiKey: "b1962e185eb7a4a2513857a8e4a711b3-f7d687c0-37e426cf",
  //   });
  //   const data = {
  //     from: "akbonnet@protonmail.com",
  //     to: "akbonnet@protonmail.com, anbudanajit@gmail.com",
  //     subject: "Hello",
  //     text: "Testing some Mailgun awesomness!",
  //   };
  //   const info = mg.messages().send(data, function (error, body) {
  //     console.log(body);
  //   });

  const API_KEY = "b1962e185eb7a4a2513857a8e4a711b3-f7d687c0-37e426cf";
  // const DOMAIN = 'YOUR_DOMAIN_NAME';

  const mailgun = new Mailgun(formData);
  const client = mailgun.client({ username: "akbonnet", key: API_KEY });

  const messageData = {
    from: "Excited User <me@samples.mailgun.org>",
    to: "foo@example.com, bar@example.com, anbudanajit@gmail.com",
    subject: "Hello",
    text: "Testing some Mailgun awesomeness!",
  };

  const info = await client.messages.create(messageData);

  res.send(info);
};
module.exports = sendEmail;
