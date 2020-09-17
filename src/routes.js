import bodyParser from "body-parser";

const nodemail = require("nodemailer");

const BodyParser = require('body-parser');
const express = require('express');
const app = express.Router();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/post', function(req, res){
    res.send("name: "+req.body.name+" email: "+req.body.email+" subject: "+req.body.subject+" message: "+req.body.message+"");
})

app.listen(3333, function(){
    console.log("Servidor roda na porta: http://localhost:3333");
});

export default routes;