// Aula 17 - Operadores de comparação

/*
Operadores de comparação

> maior que 
>= maior que ou igual a
< menor que
< menor que ou igual a 
== igualdade (valor)
=== igualdade estrita (valor e tipo)
!= diferente (valor)
!== diferente estrito (valor e tipo)
*/

// Ira retornar um valor boolean true, pois 10 é maior que 5
console.log(10 > 5);

// Podemos usar com variaveis tambem
const valor = 10 > 5;
console.log(valor);

// No exemplo a seguir ele sempre vai retornar true se cair em uma das duas condições, uma for maior que a outra ou for igual a outra
console.log(10 >= 5);

// Tambem podemos usar a mesma logica para comparar valores menores
console.log(10 < 5);
console.log(10 <= 5);

// Usando com variaveis
const num1 = 10;
const num2 = 5;
console.log(num1 < num2);

// O operador == compara somente valor no caso de um numero e uma string ele vai retornar true
const num3 = 10;
const num4 = '10';
console.log(num3 == num4);

// Quando usamos === ele compara valor e tipo, retornando false
console.log(num3 === num4);

// Seguindo a mesma logica usando os operadores de diferente
console.log(num3 != num4);  // Verifica somente valor
console.log(num3 !== num4); // Verifica valor e tipo
