// const routes = require("routes");
const autOrder = require("./node_modules/order/auth/autOrder");
const nodemail = require("nodemailer");
import express from 'express';

const routes = express.Router();
const order = new autOrder();

routes.get('/points', autOrder.order);

let transporter = nodemail.createTransport({
 host: "smtp-mail.outlook.com",
//host: "smtp.gmail.com",
port: 587,
secure: false,
auth: {
    user: "",
    pass: ""
}
});

transporter.sendMail({
    from: "",
    to: "",
    subject: "Contato",
    text: "solicitação",
    //html: 
}).then(message => {
    console.log(message);
}).catch(erro => {
    console.log(erro);
})
