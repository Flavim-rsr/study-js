// Aula 11 - Um pouco mais sobre Numbers em JavaScript

// Dois numbers
let num1 = 1;
let num2 = 2.5;

// É possivel converter o numero para uma String em apenas uma exibição
console.log(num1.toString() + num2); // Não sera feito o calculo, pois ele vai concatenar o Number e a String

// Para mostrar o numero na sua forma binaria basta colocar um 2 no toString
let num3 = 1500;
console.log(num3.toString(2));

// Caso queira converter de verdade a varivael para uma string, não apenas em um console.log
num1 = num1.toString();
console.log(typeof num1);

// Para mostrar apenas algumas casas decimais utilizamos a função toFixed, ele faz um arredondamento quando necessario
let num4 = 10.564894894;
console.log(num4.toFixed(2));

// Quando recebermos um valor de uma base de dados ou de qualquer outra fonte, podemos verificar se o numero é inteiro utilizando o isInteger, ele retorna true caso o numero seja inteiro ou falso caso não seja
let num5 = 10;
console.log(Number.isInteger(num5));


// Quando eu tiver uma variavel com uma conta armazenada eu posso verificar se ela é valida usando o isNaN, ele retorna true para quando o retorno for NaN ou false para quando não for
let temp = num5 * 'ola';
console.log(Number.isNaN(temp));

// O JS usa uma precisão de conta IEEE 754-2008 
let numero = 0.7;
let numero2 = 0.1;
console.log(numero + numero2);

// Para resolver essa imprecisão podemos fazer contas 

numero = (((numero * 100) + (numero2 * 100))/ 100); // 0.8
numero = (((numero * 100) + (numero2 * 100))/ 100); // 0.9
numero = (((numero * 100) + (numero2 * 100))/ 100); // 1
console.log(numero);


// Tambem pode ser resolvido usando as funções do JS, pegando o numero final que será exibido transformando em Number e usando o toFixed(2)
numero = Number(numero.toFixed(2));

// Tambem é possivel pegar a raiz quadrada de um numero
let raiz = 9;
console.log(raiz ** (1/2));
console.log(raiz ** 0.5);

// Em JS é possivel dividir um numero por 0 gerando um tipo numerico Infinity, e isso é avaliado como true
console.log(100 / 0);