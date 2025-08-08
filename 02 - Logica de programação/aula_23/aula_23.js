// Aula 23 - Objeto Date

// Função Date é uma função construtora, para utiliza-la é necessario usar o operador new
const tresHoras = 60 * 60 * 3 * 1000; // Armazenando 3h na variavel
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras + umDia); // 01/01/1970 Timestamp unix ou época unix
console.log(data.toString());

