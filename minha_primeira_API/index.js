import express from 'express';

const app = express(); //primeiro pilar: instancia do express
app.use(express.json());

/*
 * idLivro -> identificador / int
 * stTitulo -> string = ds
 * stAutor -> string = ds
 * blDisponivel -> boolean = fg
*/

let ultimoId = 1;
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

app.get("/livros/:id", (req, res) => {
    const id = parseInt(req.params.id);
    if(isNaN(id)) {
        return res
        .status(400)
        .json({mensagem: "o parametro precisa ser um numero valido"});
    }

    let livro = livros.find((livro) => {
        return livro.idLivro === id;
    });

    if(livro) {
        res.status(404).send();
    }

    res.json(livro());
});

app.post("/livros", (req, res) => {
    let idNovo = ultimoId++;

    let tituloEnviado = req.body.titulo
    let autorEnviado = req.body.autor

    if(!tituloEnviado || !autorEnviado){
        return res
        .status(400)
        .json({ mensagem: "dados invalidos, verifique se esta tudo preenchido" });
    }

    let novoLivro = {
        idLivro: idNovo,
        blDispobivel: true,
        stTitutlo: tituloEnviado,
        stAutor: autorEnviado
    };

    livros.push(novoLivro);

    res.status(201).json(livros);
});

app.delete("/livros/:id", (req, res) => {
    const id = parseInt(req.params.id);

    if(isNaN(id)) {
        res.status(400).json({ mensagem: "identificador deve ser um numero" });
    }

    let indexLivro = livros.findIndex((livro) => {
        return livro.idLivro === id;
    });

    if(indexLivro === -1) {
        res.status(404).send();
    }

    livros.splice(indexLivro, 1);
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