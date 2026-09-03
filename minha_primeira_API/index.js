import express from 'express';

const app = express(); //primeiro pilar: instancia do express

/*
 * idLivro -> identificador / int
 * stTitulo -> string
 * stAutor -> string
 * blDisponivel -> boolean
*/

let meuPrimeiroLivro = {
    id: 1,
    stTitulo: "negoney em busca da manga perfeita",
    stAutor: "Nego Neyson",
    blDisponivel: true
};

let livros = [meuPrimeiroLivro];

app.get("/", (req, res) => {
    res.send("seja bem-vindo a gestão de livros");
});

app.get("/livros", (pergunta, resposta) => {
    //segundo pilar: rotas
    resposta.send("Hello world!");
});

app.listen(3000); //terceiro pilar: porta a ser ouvida


/*
cadastrar livros - POST
buscar todos livros - GET
buscar um livro pelo nome - GET
buscar um livro pelo id - GET
emprestar livro - PATCH
devolver livro - PATCH
deletar livro - DELETE
*/