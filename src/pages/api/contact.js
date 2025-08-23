// pages/api/contact.js

import nodemailer from 'nodemailer';
import { thankYouEmailTemplate } from '@utils/thankYouEmailTemplate';
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { firstName, lastName, email, phone, subject, comment } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'ordershogunmaitake@gmail.com',
        pass: 'ljun zoyb rcog wmmp', // ⚠️ Use an App Password, not your main password
      },
    });

    const mailOptions = {
      from: "ordershogunmaitake@gmail.com",
      to: email,
      subject: `New Contact Form Submission: ${subject}`,
      html: thankYouEmailTemplate({  firstName,lastName  }),
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Email sent successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Email failed to send.' });
  }
}
