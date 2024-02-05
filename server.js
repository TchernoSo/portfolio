const nodemailer = require('nodemailer');
// app.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/')));; // Assuming you have static files in a 'public' folder

// Your routes go here

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
  
    // Create a transporter object with your email provider's credentials
    const transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
  
    // Set up the email options
    const mailOptions = {
      from: 'your-email@gmail.com',
      to: 'recipient-email@example.com',
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };
  
    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send('Error sending email');
      } else {
        console.log('Email sent: ' + info.response);
        res.status(200).send('Email sent successfully');
      }
    });
  });
  