let meu_texto = "10";
console.log(typeof meu_texto);

let meu_valor_numerico = parseInt(meu_texto);
console.log(typeof meu_valor_numerico);

let meu_valor_flutuante = parseFloat("1.23");
console.log(typeof meu_valor_flutuante);

meu_nome = "erik";
console.log(`meu nome é do tipo: ${typeof meu_nome}`);

let meu_nome_em_numero = parseInt(meu_nome);
console.log(`meu nome agora é do tipo: ${meu_nome_em_numero}`);

console.log(`deu boa a conversa? -> ${!isNaN(meu_nome_em_numero)}`);

let meu_numero = 123;
console.log(typeof meu_numero);

//"123"
let meu_numero_em_texto = String(meu_numero);
console.log(meu_numero);
console.log(meu_numero_em_texto);

let teste = false;
console.log(typeof teste);

let teste_to_string = String(true);
console.log(typeof teste_to_string);

console.log(teste_to_string === String);