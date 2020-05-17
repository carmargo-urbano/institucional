const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');
const handlebars = require('handlebars');

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

  let statusMessages = {
    status: '',
    message: ''
  };

  transporter.sendMail(mailOptions)
    .then(info => {
      console.log('Email enviado para QuickPick: ' + info.response);
      statusMessages = {
        status: 'success',
        message: 'success'
      }

      const filePath = path.join(__dirname, `./emails/interest.html`);
      const source = fs.readFileSync(filePath, 'utf-8').toString();
      const template = handlebars.compile(source);
      const replacements = {
        header: `${process.env.REACT_APP_BASE_URL}images/email-header.jpg`,
        name: req.body.name,
      };
      const htmlMessage = template(replacements);

      const mailOptionsAttachment = {
        from: `QuickPick <camargo.urbano.8587@gmail.com>`,
        to: req.body.email,
        subject: `[QUICKPICK] Contato - Form de interesse`,
        html: htmlMessage,
        attachments: [
          { path: path.join(__dirname, `./TEMPLATE.xlsx`) }
        ]
      };

      transporter.sendMail(mailOptionsAttachment)
        .then(info => {
          console.log('Email enviado para Cliente: ' + info.response);
          res.status(200).json({ status: 'success', statusMessages });
        })
        .catch(error => {
          res.status(400).json({ status: 'fail', message: error, statusMessages });
        });
    })
    .catch(error => {
      statusMessages = {
        status: 'fail',
        message: error
      }
      res.status(400).json({ status: 'fail', message: error, statusMessages });
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
