const usuarios = [
    { nome: "João", idade: 25 },
    { nome: "Maria", idade: 10 },
    { nome: "Cleber", idade: 52 },
    { nome: "Matheus", idade: 6 },
    { nome: "Suzana", idade: 22 },
    { nome: "Camila", idade: 25 },
    { nome: "Jonathan", idade: 24 },
    { nome: "Fernando", idade: 34 },
    { nome: "Clara", idade: 41 },
    { nome: "Bruno", idade: 18 }
];

const maiorDeTrinta = usuarios.findIndex((usuario) => usuario.idade > 30);

if(maiorDeTrinta !== undefined) {
    console.log(maiorDeTrinta);
} else {
    console.log("nao encontrei nenhum usuario");
}