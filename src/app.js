require("dotenv").config();

const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

const EMAIL_USUARIO = process.env.EMAIL_USUARIO;
const EMAIL_SENHA = process.env.EMAIL_SENHA;

app.use(cors());
app.use(express.json());

app.post("/contato", async (req, res) => {
  const { nome, email, mensagem } = req.body;

  if (!nome || !email || !mensagem) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios." });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587, 
      secure: false,
      auth: {
        user: EMAIL_USUARIO,
        pass: EMAIL_SENHA,
      },
    });

    const mailOptions = {
      from: email,
      to: EMAIL_USUARIO,
      subject: `Mensagem de ${nome} - ${email}`,
      text: mensagem,
    };

    await transporter.sendMail(mailOptions);
    transporter.close();

    res.status(200).json({ message: "Email enviado com sucesso!" });
     
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    transporter.close();
    res.status(500).json({ error: "Erro ao enviar email." });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
