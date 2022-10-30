const nodemailer = require('nodemailer');

const SendEmail = async (EmailTo, EmailText, EmailSubject) => {

    let transporter = nodemailer.createTransport({
        host: 'noreply@gmail.com',
        port: 25,
        secure: false,
        auth: {
            user: "info@gmail.com",
            pass: '~sR4[bhaC[Qs'
        },tls: {
            rejectUnauthorized: false
        },
    });

    let mailOptions = {
        from: 'Inventory <applerb326@gmail.com>',
        to: EmailTo,
        subject: EmailSubject,
        text: EmailText
    };

   return  await transporter.sendMail(mailOptions)

}
module.exports= SendEmail