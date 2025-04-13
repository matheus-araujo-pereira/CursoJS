let nome = "Matheus";

console.log("Eu me chamo", nome);

let idade;
console.log(idade);
// A variável idade não foi inicializada, então ela é undefined
// Agora vamos inicializar a variável idade
idade = 20;
console.log("Eu tenho", idade, "anos");
console.log("Eu tenho " + idade + " anos");
console.log("Eu tenho " + idade + " anos e me chamo " + nome);
console.log("Eu tenho " + idade + " anos e me chamo " + nome + " e sou estudante de programação");

// Não podemos declarar uma variável com o mesmo nome
// let nome = "Matheus"; // Isso vai dar erro

// Não podemos criar variaveis com palavras reservadas
// let if;

// Variaveis precisam ter nomes significativos
// let n = "Matheus"; // Isso não é uma boa prática
let nomeCompleto = "Matheus Araujo Pereira"; // Isso é uma boa prática

// Variaveis não podem começar com numeros
let nome1 = "Matheus"; // Isso é permitido
// let 1nome = "Matheus"; // Isso não é permitido

// Variaveis podem começar com _ e $
let _nome = "Matheus"; // Isso é permitido
let $nome = "Matheus"; // Isso é permitido

// Utilizamos camelCase
let nomeCompletoDoMatheus = "Matheus Araujo Pereira"; // Isso é uma boa prática