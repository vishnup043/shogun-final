import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST allowed' });
  }

  const { to, subject, text, html } = req.body;

  if (!to || !subject || (!text && !html)) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Create transporter using Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER || "vpmoothikkal@gmail.com",       // your Gmail address
      pass: process.env.GMAIL_PASS || "ljun zoyb rcog wmmp",       // your Gmail app password or real password
    },
  });

  try {
    await transporter.sendMail({
      from: "orders@shogunmaitake.com",
      to,
      cc: "jjacob@shogunmaitake.com",
      subject,
      text,
      html,
    });

    res.status(200).json({ message: 'Email sent successfully', mail: to });
  } catch (error) {
    console.error('Error sending mail:', error);
    res.status(500).json({ message: 'Error sending email', error: error.message });
  }
}
