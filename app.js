require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;

const EMAIL_USUARIO = process.env.EMAIL_USUARIO;
const EMAIL_SENHA = process.env.EMAIL_SENHA;

app.use(cors());
app.use(express.json());



