import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  // Configure o transporte SMTP
  const transporter = nodemailer.createTransport({
    host: "server18.mailgrid.com.br",
    port: 587,
    secure: false, // true para 465, false para outras portas
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Jaboatão PREV - Fale Conosco" <${process.env.SMTP_USER}>`,
      to: process.env.DESTINATION_EMAIL, // Destinatário configurado no .env
      subject: "Jaboatão PREV - Nova mensagem",
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
          <table style="width: 100%; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
            <tr>
              <td style="background-color: #003476; color: white; text-align: center; padding: 10px;">
                <h1 style="margin: 0;">Jaboatão PREV</h1>
              </td>
            </tr>
            <tr>
              <td style="padding: 20px;">
                <p><strong>Nome:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Mensagem:</strong></p>
                <p>${message}</p>
              </td>
            </tr>
          </table>
        </div>
      `,
    });

    res.status(200).json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send message." });
  }
}
