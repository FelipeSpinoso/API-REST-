const http  = require('http');
const app = require('./app'); // importando do app.js
const port = process.env.PORT || 3000; //porta local
const server = http.createServer(app); // estamos o 'app' para dentro do server

server.listen(port);




