# Portfólio

Este é um projeto com a finalidade de treinar habilidades referentes a Node.js. Consiste em uma api de contato onde ao receber informações, realiza envio de uma mensagem, previamente enviada, ao email destinatário.

## Demo
<img src="./public/images/print_email.png" alt= "print da caixa de emails">

## Tecnologias

- JavaScript
- Node.js
- Nodemailer
- CORS
- Express
- Dotenv


## Requisitos
- Node.js
- npm


## Como executar

**Para executar este projeto na sua máquina, siga as instruções abaixo**

Rode os seguintes comandos no seu terminal para clonar o projeto:

```
$ git clone git@github.com:dhayananascimento/backend-portfolio.git
$ cd backend-portfolio
```

Crie um arquivo `.env`, na raiz do projeto, e adicione as variáveis abaixo:

> **Obs.:** adicione um email real para onde deseja enviar as mensagens e não se esqueça de criar uma **Senha de app** ao invés de usar sua senha pessoal.

```
PORT
EMAIL_USER
EMAIL_PASSWORD
```

Execute o projeto:

```
$ npm install
$ npm start
```

## Como testar

Em um terminal, rode o seguinte comando, substituindo os campos **name**, **email** e **message** com os valores desejados:
```
curl -X POST http://localhost:5000/contato \
     -H "Content-Type: application/json" \
     -d '{"name": "Nome Teste", "email": "teste@gmail.com", "message": "Testando envio de email!"}'

```
