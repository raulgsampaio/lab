const express = require("express"); // Importa o módulo express
const app = express(); // Inicia o express


// Rota inicial (home)
app.get("/", function(req, res) {
    res.send("<h1>Bem-vindo ao meu novo site modificado2!</h1>");
});


// Rota para informações sobre a empresa
app.get("/empresa", function(req, res) {
    res.send("<h1>Sobre a Empresa: Empresa fictícia de exemplo!</h1>");
});


// Rota para listar serviços
app.get("/servicos", function(req, res) {
    res.send("<h1>Nossos serviços incluem desenvolvimento web e hospedagem!</h1>");
});


// Rota para consulta com parâmetro obrigatório
app.get("/consulta/:item", function(req, res) {
    res.send("<h1>Você consultou o item: " + req.params.item + "</h1>");
});


// Rota para cadastro com parâmetro opcional
app.get("/cadastro/:usuario?", function(req, res) {
    var usuario = req.params.usuario;
    if (usuario) {
        res.send("<h1>Usuário " + usuario + " cadastrado com sucesso!</h1>");
    } else {
        res.send("<h1>Novo usuário cadastrado!</h1>");
    }
});


// Configurando a porta do servidor
app.listen(process.env.PORT ?? 3000, function(erro) {
    if (erro) {
        console.log("Erro ao iniciar o servidor.");
    } else {
        console.log("Servidor iniciado na porta 3000.");
    }
});
