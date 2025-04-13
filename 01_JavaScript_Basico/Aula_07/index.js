// Diferenças entre var, let e const
// var: escopo global ou de função, pode ser redeclarada e atualizada
var nome = 'Lucas';
var nome = 'João'; // redeclarada
console.log(nome); // João
// let: escopo de bloco, não pode ser redeclarada, mas pode ser atualizada
let idade = 25;
idade = 26; // atualizada
console.log(idade); // 26
// const: escopo de bloco, não pode ser redeclarada e nem atualizada
const cidade = 'São Paulo';
// cidade = 'Rio de Janeiro'; // erro: Assignment to constant variable
console.log(cidade); // São Paulo