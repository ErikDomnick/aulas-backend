import express from 'express';

const app = express(); //primeiro pilar: instancia do express

/*
 * idLivro -> identificador / int
 * stTitulo -> string
 * stAutor -> string
 * blDisponivel -> boolean
*/

let livros = [
    {idLivro: 1, stTitulo: "as conicas de negoney", stAutor: "negoney", blDisponivel: true},
    {idLivro: 2, stTitulo: "as conicas de negoney", stAutor: "negoney", blDisponivel: true}
]; //banco de dados

app.get("/", (req, res) => {
    res.send("seja bem-vindo a gestão de livros");
});

app.get("/livros", (req, res) => {
    res.json(livros);
});

app.get("livros/:id", (req, res) => {
    const id = parseInt(req.params.id);
    if(isNaN(id)) {
        res.status(400).json({mensagem: "o parametro precisa ser um numero valido"});
    }
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