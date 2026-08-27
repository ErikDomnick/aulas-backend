import express from 'express';

const app = express(); //primeiro pilar: instancia do express

app.get("/", (req, res) => {
    res.send("seja bem-vindo a gestão de livros");
});

app.get("/livros", (pergunta, resposta) => {
    //segundo pilar: rotas
    resposta.send("Hello world!");
});

app.listen(3000); //terceiro pilar: porta a ser ouvida
