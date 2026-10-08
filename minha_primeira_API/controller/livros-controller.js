let livros = [
    {idLivro: 1, stTitulo: "as conicas de negoney", stAutor: "negoney", blDisponivel: true},
    {idLivro: 2, stTitulo: "as conicas de negoney", stAutor: "negoney", blDisponivel: true}
]; //banco de dados

let ultimoId = 2;

export function findAll(res) {
    /*let todosOsLivros = livros; // (res -> router -> controller -> router -> res) controller nao conhece o res
    return todosOsLivros*/

    //res.json(livros); // triangulo (res -> router -> controller -> res), controller conhece o res

    return livros;
};

export function findOne(id) {
    let livro = livros.find(livro => livro.idLivro === id);

    return livro;
};

export function criarLivro(titulo, autor) {
    let novoId = ultimoId + 1;
    ultimoId++;

    let novoLivro = {
        idLivro: idNovo,
        blDisponivel: true,
        stTitutlo: tituloEnviado,
        stAutor: autorEnviado
    };

    livros.push(novoLivro);
    return novoLivro;
};

export function deletarLivro(id) {
    let indexLivro = livros.findIndex(livro => livro.idLivro === id);

    livros.splice(indexLivro, 1);
};

export function editarLivro(id) {
    const novoTitulo = req.body.stTitulo;
    const novoAutor = req.body.stAutor;

    let indexLivro = livros.findIndex(livro => livro.idLivro === id);

    livros.splice(indexLivro, 1, );

    if(novoAutor !== undefined) {
        livroAtt.stAutor = novoAutor;
    }
    if(novoTitulo !== undefined) {
        livroAtt.stTitulo = novoTitulo;
    }
};

/* - termine de implementar a mudança da rota de edição de livro para usar o router e o controller
    exporte a funcao
    chama a funcao no router
    retorno o status de acordo com o resultado da operacao
    
- implemente, de forma global, um middleware que logue as requisicoes
    console.log(`[${new.Data().toISOString()}] ${method} ${originalUrl} - IP: ${ip}]`)*/