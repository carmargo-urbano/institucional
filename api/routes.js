const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/sendEmail', async (req, res) => {
  console.log('Interested: ', req.body);

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    }
  });

  let htmlTable = '<table>';
  Object.keys(req.body).forEach(item => {
    htmlTable += `
      <tr>
        <td><strong>${item}</strong></td>
        <td>${req.body[item]}</td>
      </tr>
    `;
  });
  htmlTable += '</table>';

  const mailOptions = {
    from: `${req.body.name} <camargo.urbano.8587@gmail.com>`,
    to: 'camargo.urbano.8587@gmail.com',
    subject: `[QUICKPICK] Form de interesse`,
    html: htmlTable
  };

  await transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      res.status(400).json({ status: 'fail', message: error });
    } else {
      console.log('Email enviado: ' + info.response);
      res.status(200).json({ status: 'success' });
    }
  });
});


router.post('/sendContact', async (req, res) => {
  console.log('Contact: ', req.body);

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    }
  });

  let htmlTable = '<table>';
  Object.keys(req.body).forEach(item => {
    htmlTable += `
      <tr>
        <td><strong>${item}</strong></td>
        <td>${req.body[item]}</td>
      </tr>
    `;
  });
  htmlTable += '</table>';

  const mailOptions = {
    from: `${req.body.name} <camargo.urbano.8587@gmail.com>`,
    to: 'camargo.urbano.8587@gmail.com',
    subject: `[QUICKPICK] Contato pelo site`,
    html: htmlTable
  };

  await transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      res.status(400).json({ status: 'fail', message: error });
    } else {
      console.log('Email enviado: ' + info.response);
      res.status(200).json({ status: 'success' });
    }
  });
});

module.exports = router;
