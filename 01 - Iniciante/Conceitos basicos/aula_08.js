// Aula 08 - Operadores aritimeticos
/*
 +  Adição / Concatenação (unir dois valores) 
 - (subtração)
 / (divisao)
 * (multiplicação) 
** (potenciação)
 % (resto da divisão)
*/

const num1 = 5;
const num2 = 10;
console.log(num1 + num2);

// Caso algum numero desses seja uma String ele faz a concatenação
const num3 = 5;
const num4 = '10';
console.log(num3 + num4);

// Como na matematica os operadores tem precedencia, para alterar a precedencia basta colocar parenteses
/*
Precedencia dos operadores
 1° ()
 2° **
 3° * / %
 4° + -
*/

console.log(num1 + num2 * num3);
console.log((num1 + num2) * num3);

// Operador de incremento ++ ele incrementa a variavel e atribui o valor nela
// Não é possivel utilizar esse operador em uma constante

let contador = 1;
contador++; // 2
contador++; // 3
contador++; // 4
console.log(contador);

// Ele pode ser utilizado como pos(depois da variavel) ou pre (antes da variavel)
// contador++ (pós-incremento): Primeiro retorna o valor atual da variável, depois incrementa.
// ++contador (pré-incremento):Primeiro incrementa o valor da variável, depois retorna o novo valor.
let contador1 = 1;
console.log(contador++); // Saída: 1 (incrementa depois)
console.log(++contador); // Saída: 3 (incrementa antes)

// Tambem existe o operador de decremento que utiliza a mesma logica do incremento
let decremento = 1;
console.log(decremento++);
console.log(++decremento);

// É possivel utilizar um operador de atribuição += que ele atribui o valor da variavel sem precisar de muito codigo
// Pode ser utilizado com os outros operadores aritimeticos
let passo = 2;
let total = 2;
passo += total;     // total = total + passo
console.log(total);

// Quando eu tento realizar uma conta com alguma variavel que não tenha o tipo primitivo de Number, ele retorna um NaN (Not a Number)
const x = 10;
const y = "Flavio";
console.log(x * y);

// Em alguns casos a engine do JS vai tentar resolver o erro
const f = 10;
const t = '5'; // A engine transforma essa String em um Number para realizar a operação
console.log(f * t);

// É possivel fazer a conversão dos tipos de uma variavel
const v = parseInt('5');        // Converte a String para um numero inteiro
const p = parseInt('5.5');      // Mantem apenas o numero inteiro na conversão
const g = parseFloat('5.5');    // Mantem o numero inteiro e suas casas decimais na conversão
const i = Number('5');          // Verifica se é possivel converter para um numero seja ele inteiro ou ponto flutuante
const o = Number('5.5');
