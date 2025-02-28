import nodemailer from 'nodemailer'

export const sendEmail = async()=> {

const transporter = nodemailer.createTransport({
    service :"gmail",
    auth: {
      user: "ccntfrcrss@gmail.com",
      pass: "istxuofgjpjetrsz",
    },
  });
  const htmlContent = `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
    <h2 style="color: #333; text-align: center;">👋 Hello from Edge!</h2>
    <p style="color: #555; font-size: 16px; line-height: 1.6;">
      This is a test email with some styling. Hope you're doing great! 🎉
    </p>
    <table style="width: 100%; margin-top: 20px; border-collapse: collapse;">
      <tr>
        <td style="background-color: #4CAF50; color: white; text-align: center; padding: 10px; border-radius: 5px;">
          <a href="https://example.com" style="color: white; text-decoration: none; font-size: 16px;">Visit Our Website</a>
        </td>
      </tr>
    </table>
    <p style="text-align: center; color: #888; font-size: 14px; margin-top: 20px;">
      © 2025 Edge. All rights reserved.
    </p>
  </div>
`;
  const info = await transporter.sendMail({
    from: '"Edge btmsy 3leek 👻" <ccntfrcrss@gmail.com>', // sender address
    to: ['farah.elhalawny18@gmail.com'], // list of receivers
    subject: "ُNew Investment harry up", // Subject line
    html: htmlContent, // html body
  });

  console.log("Message sent: %s", info.messageId);
}