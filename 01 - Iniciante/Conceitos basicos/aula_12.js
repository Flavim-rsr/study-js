// Aula 12 - Objeto Math

// O Math é um objeto em JS com metodos para operações como arredondar, gerar numeros aleatorios, calcular potencias, raizes etc.
// É possivel arredondar o numero para baixo usando o metodo floor e arredondar para cima utilizamos o metodo ceil
// O floor arrendonda para o numero inteiro mais proximo menor
let num1 = 9.54578;
let num2 = Math.floor(num1);
console.log(num2);

// O ceil arrendonda para o numero inteiro mais proximo maior
let num3 = 9.4578;
let num4 = Math.ceil(num3);
console.log(num4);

// Tambem temos o metodo round que arredonda para o numero mais proximo, sendo ele para cima ou para baixo
let num5 = Math.round(num3);
console.log(num5);

// É possivel pegar o maior numero de uma sequencia usando o metodo max e para pegar o menor utilize o min
console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6));
console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6));

// Tambem é possivel gerar numeros aleatorios com o metodo random
console.log(Math.random());

// É possivel gerar um numero aleatorio entre um range, utilizando os metodos aprendidos
const aleatorio = Math.round(Math.random() * (10 - 5) + 5);
console.log(aleatorio);

// Para pegar o valor de PI utilizamos o metodo PI
console.log(Math.PI);

// Para pegar potenciação podemos usar o metodo pow, ele precisa de dois parametros 
console.log(Math.pow(2, 10));
console.log(2 ** 10);   // Forma de fazer usando um operador