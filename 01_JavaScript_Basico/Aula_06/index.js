const nome = "Matheus Araujo Pereira";
const idade = 24;
const peso = 100;
const altura = 1.78;

let imc;
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2025 - idade;

console.log("Nome: " + nome);
console.log("Idade: " + idade);
console.log("Peso: " + peso);
console.log("Altura: " + altura);
console.log("IMC: " + imc);
console.log("Ano de Nascimento: " + anoNascimento);

// Template String
const mensagem = `Olá, meu nome é ${nome}, tenho ${idade} anos, peso ${peso}kg e minha altura é ${altura}m. Meu IMC é ${imc.toFixed(2)} e nasci em ${anoNascimento}.`;
console.log(mensagem);