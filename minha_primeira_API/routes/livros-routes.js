import Router from "express";
import { findAll, findOne, criarLivro, deletarLivro, editarLivro} from "../controller/livros-controller.js";

const router = Router();

router.get("/", (req, res) => {
    /*const todosOsLivros = findAll(); //controller nao conhece o res
    console.log(todosOsLivros);*/

    //findAll(res); // triangulo, controller conhece o res

    const todosOsLivros = findAll();
    res.json(todosOsLivros);
});

router.get("/:id", (req, res) => {
    const idLivro = parseInt(req.params.id);

    if(isNaN(idLivro)) {
        return res
            .status(400) //requisicao mal formada
            .json({mensagem: "o parametro precisa ser um numero valido"});
    }

    let livro = findOne(idLivro);

    if(livro) {
        res.status(404).send();
    }

    res.json(livro);
});

router.post("/", (req, res) => {
    let tituloEnviado = req.body.stTitulo;
    let autorEnviado = req.body.atAutor;

    if (!autor_enviado || !titulo_enviado) {
        return res
            .status(400)
            .json({ mensagem: "dados faltando, verifique autor e titulo" });
    }

    let livroCriado = criarLivro(tituloEnviado, autorEnviado);
    if(!livroCriado) {
        res.status(500).json({ mensagem: "algo deu errado" });
    }

    return res.status(201).json(livroCriado);
});

router.delete("/:id", (req, res) => {
    const idLivro = parseInt(req.params.id);

    if(isNaN(idLivro)) {
        res.status(400).json({ mensagem: "identificador deve ser um numero" });
    }

    let livro = findOne(id);
    if(!livro) {
        res.status(404).send();
    }

    deletarLivro(idLivro);
    res.sendStatus(204);
});

router.patch("/:id", (req, res) => {
    const id = req.params.id;
    
    if(isNaN(id)) {
        return res
            .status(400)
            .json({ mensagem: "identificador precisa ser um numero valido" });
    }

    let livroAtt = editarLivro(id);

    res.sendStatus(204);
});

export default router;

/*
import express from 'express';

const validaParametro = (param) => {
    const numero = parseInt(param);

    return isNaN(numero);
};

const app = express(); //primeiro pilar: instancia do express
app.use(express.json());
app.use(cors());

 * idLivro -> identificador / int
 * stTitulo -> string = ds
 * stAutor -> string = ds
 * blDisponivel -> boolean = fg
*/
/*
let ultimoId = 2;
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
    const id = req.params.id;

    if(isNaN(validaParametro(id))) {
        //se nao for um numero
        return res
        .status(400) //requisicao mal formada
        .json({mensagem: "o parametro precisa ser um numero valido"});
    }

    let livro = livros.find((livro) => {
        return livro.idLivro === parseInt(id);
    });

    if(livro === undefined) {
        res.status(404).send();
    }

    res.json(livro());
});

app.post("/livros", (req, res) => {
    let idNovo = ultimoId + 1;
    ultimoId++;

    let tituloEnviado = req.body.titulo
    let autorEnviado = req.body.autor

    if(!tituloEnviado || !autorEnviado){
        return res
        .status(400)
        .json({ mensagem: "dados invalidos, verifique se esta tudo preenchido" });
    }

    let novoLivro = {
        idLivro: idNovo,
        blDisponivel: true,
        stTitutlo: tituloEnviado,
        stAutor: autorEnviado
    };

    livros.push(novoLivro); //eu adicionei um novo livro ao "banco de dados"

    res.status(201).json(livros);
});

app.delete("/livros/:id", (req, res) => {
    const id = req.params.id;

    if(isNaN(validaParametro(id))) {
        res.status(400).json({ mensagem: "identificador deve ser um numero" });
    }

    let indexLivro = livros.findIndex((livro) => {
        return livro.idLivro === id;
    });

    if(indexLivro === -1) {
        res.status(404).send();
    }

    livros.splice(indexLivro, 1);

    res.sendStatus(204);
});

app.patch('/livros/:id', (req, res) => {
    const id = req.params.id;
    const novoTitulo = req.body.stTitulo;
    const novoAutor = req.body.stAutor;
    
    if(isNaN(validaParametro(id))) {
        return res
            .status(400)
            .json({ mensagem: "identificador precisa ser um numero valido" });
    }

    let indexLivro = livros.findIndex((livro) => {
        return livro.idLivro === parseInt(id);
    });

    if(indexLivro === -1) {
        return res.sendStatus(404);
    }

    let livroAtt = livros[indexLivro];

    if(novoAutor !== undefined) {
        livroAtt.stAutor = novoAutor;
    }
    if(novoTitulo !== undefined) {
        livroAtt.stTitulo = novoTitulo;
    }

    res.sendStatus(204);
});

// ATIVIDADE DO MAL

//PATCH EMPRESTAR
app.patch("/livros/emp/:id", (req, res) => {
    const id = req.params.id;
    const novoTitulo = req.body.stTitulo;
    const novoAutor = req.body.stAutor;
    const novoDisp = req.body.blDisponivel;
    
    if(isNaN(validaParametro(id))) {
        return res
            .status(400)
            .json({ mensagem: "identificador precisa ser um numero valido" });
    }

    let indexLivro = livros.findIndex((livro) => {
        return livro.idLivro === parseInt(id);
    });

    if(indexLivro === -1) {
        return res.sendStatus(404);
    }

    let livroAtt = livros[indexLivro];

    if(livroAtt.blDisponivel) {
        livroAtt.blDisponivel = false
    } else {
        res.status(409)
           .json({ mensagem: "livro indisponivel" });
    }

    if(novoDisp !== undefined) {
        livroAtt.blDisponivel = novoDisp;
    }

    console.log(livroAtt);

    res.status(204);
});

//PATCH DEVOLVER
app.patch("/livros/dev/:id", (req, res) => {
    const id = req.params.id;
    const novoTitulo = req.body.stTitulo;
    const novoAutor = req.body.stAutor;
    const novoDisp = req.body.blDisponivel;
    
    if(isNaN(validaParametro(id))) {
        return res
            .status(400)
            .json({ mensagem: "identificador precisa ser um numero valido" });
    }

    let indexLivro = livros.findIndex((livro) => {
        return livro.idLivro === parseInt(id);
    });

    if(indexLivro === -1) {
        return res.sendStatus(404);
    }

    let livroAtt = livros[indexLivro];

    if(!(livroAtt.blDisponivel)) {
        livroAtt.blDisponivel = true
    } else {
        res.status(409)
           .json({ mensagem: "voce nao tem o livro ou esta tentando devolver um livro ja devolvido, isso nao existe" });
    }

    if(novoDisp !== undefined) {
        livroAtt.blDisponivel = novoDisp;
    }

    console.log(livroAtt);

    res.status(204);
});

    app.listen(3000); //terceiro pilar: porta a ser ouvida
});*/