// Aula 09 - alert, confirm e prompt

// Alert é uma função que exibe uma caisa de dialogo com uma mensagem no front end para o usuario
alert('Olá Mundo!!');

// Confirm exibe uma caixa de dialogo com uma mensagem e dois botões "OK" e "Cancelar", retorna true ou false
confirm('Deseja realmente confirmar?');

// O prompt exibe uma caixa de dialogo com uma mensagem e um campo para o usuario digitar um texto
prompt('Digite o seu nome: ');

// Eu posso combinar um prompt com uma varivel, atribuindo o valor que o usuario digitar na variavel
let num1 = prompt('Digite um numero: ');
console.log(typeof num1);

// Ele sempre vai ser capturado como uma String, mas eu posso converte-lo para Number 
num1 = Number(num1);
console.log(typeof num1);


// Exercicio 
// Usuario passa dois numeros e você precisa fazer a soma, no final exibir o resultado em um alert
let numero = prompt('Digite um numero');
let numero2 = prompt('Digite outro numero');
numero = Number(numero);
numero2 = Number(numero2);

alert(`A soma dos dois numeros é de ${numero + numero2}`)