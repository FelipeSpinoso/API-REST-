const express = require('express'); //importando o express
const app = express(); //criando a instancia do express

const rotaProdutos = require('./routes/produtos');

app.use('/produtos', rotaProdutos); 
app.use ('/test', (req, res, next) => {
    /***
     *  se a resposta for para o status 200, 
     * exibira a mensagem que deu certo
     */
    
    res.status(200).send({ 
        message: 'ok, conectado deu certo'
    })
});

module.exports = app; // exportando o app