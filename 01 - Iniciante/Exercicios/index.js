// Exercicio de console.log aula - 01
// Exibir o texto "Meu nome é Flavio Rodrigo De Souza Ribeiro. Estou aprendendo JavaScript às 10 da manha"
// Exibir o numero sem fazer parte da string, para a engine do JS entender que é um numero e não uma string

console.log("Meu nome é Flavio Rodrigo De Souza Ribeiro. Estou aprendendo JavaScript as", 9 , "da noite");

// Exercicio de com variaveis e constantes aula - 04 e 05
// Exibir o texto 
/* Flavio Rodrigo tem 23 anos, pesa 71kg e tem 1.70 de altura e seu IMC é de ... Flavio nasceu em 2002*/

const nome = "Flavio";
const sobrenome = "Rodrigo";
const altura = 1.70;
const peso = 71;
const idade = 23;
let imc; // peso / (altura * altura)
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2025 - idade;


console.log(nome + ' ' +  sobrenome + ' ' + " tem " +  idade + " anos, pesa " +  peso + " Kg");
console.log(`e tem, ${altura} de altura e seu IMC é de  ${imc}`); // template strings
console.log(nome, sobrenome, "nasceu em", anoNascimento);