require("dotenv").config();

const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;

app.use(cors());
app.use(express.json());

app.post("/contato", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios." });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: EMAIL_USER,
      replyTo: email,
      subject: `Portfólio pessoal`,
      text: `Nome: ${name}\nEmail: ${email}\n\nMensagem: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    transporter.close();

    res
      .status(200)
      .json({ message: "Mensagem enviada com sucesso, retornarei em breve." });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    transporter.close();
    res
      .status(500)
      .json({
        error:
          "Erro ao enviar email! Verifique as informações fornecidas ou tente novamente mais tarde.",
      });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
