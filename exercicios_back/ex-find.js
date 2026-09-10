//crie um array de objetos
//encontre, usando um for um unico registro, de acordo com uma condicao

//depois, encontre o mesmo registro usando um find

let cardapio = [
    { comida: "manga de chocolate", preco: 1.50 },
    { comida: "chocolate de manga", preco: 1.70 },
    { comida: "pecego com chocolate de manga", preco: 2.01 },
    { comida: "chocolate 70% sabor pecego com chocolate de manga", preco: 4.02 },
    { comida: "manga de chocolate com recheio de chocolate 70% sabor pecego com chocolate de manga", preco: 2.60 },
    { comida: "pecego", preco: 7.08 }
];
/*
for(i = 0; i < cardapio.length; i++) {
    const comida = cardapio[i];
    if(comida.preco > 2.02) {
        console.log(comida);
        break;
    }
};*/

const maiorQUeDoisPontoDois = cardapio.find((comida) => comida.preco > 2.02);

console.log(maiorQUeDoisPontoDois);