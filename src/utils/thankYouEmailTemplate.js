export function thankYouEmailTemplate({ firstName,lastName }) {
   const fullName = `${firstName || ""} ${lastName || ""}`.trim();
  return `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; padding: 20px; margin: 20px; background:#F0FFD8; max-width:500px;">
    <img style="width:150px" src="https://shogunmaitake.com/_next/image?url=%2Flogo%2Flogo.png&w=384&q=75"/>
      <h2 style="color: #2c3e50;">Thank You for Contacting Us!</h2>
      <p style="text-transform: capitalize;">Hi ${fullName}</p>
      <p>Thank you for reaching out to <strong>Shogun Maitake</strong>. We’ve received your message and will get back to you as soon as possible.</p>
            
      <p>We appreciate your interest in our services and look forward to helping you.</p>

      <br />
      <p>Warm regards,</p>
      <p><strong>The Shogun Maitake Team</strong></p>

      <hr style="margin-top: 30px; border: none; border-top: 1px solid #ccc;" />
      <p style="font-size: 12px; color: #888;">This is an automated message. Please do not reply to this email.</p>
    </div>
  `;
}
