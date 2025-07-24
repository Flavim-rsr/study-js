// Aula 06 - Diferença de var e let
// var pode ser redeclarado a qualquer momento no codigo 
// let não pode ser redeclarado depois do ECMAScript 2015 
// Não contem todas as diferenças somente algumas

var nome = "Flavio";
var nome = "Flavio";
sobrenome = "Rodrigo"; // É possivel criar uma variavel global sem usar as palavras reservadas, não é indicado fazer isso
console.log(nome);
console.log(sobrenome);

//Não é possivel redeclarar com let
let nome = "Flavio";
let nome = "Flavio";