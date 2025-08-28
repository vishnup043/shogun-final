export function adminEmailTemplate({ firstName, lastName, email, phone, department, subject, comment }) {
  return `
    <div style="font-family: Arial; padding: 20px;">
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Department:</strong> ${department}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong><br/>${comment}</p>
    </div>
  `;
}
