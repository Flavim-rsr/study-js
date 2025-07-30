// Exercicio com variaveis

let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A
let aux = '';

//Criei uma variavel para ser auxiliar e capturar o valor de varA antes de eu sobrescrever ele com outro valor
aux = varA; //a
varA = varB; //b
varB = varC; //c
varC = aux; // a

console.log(varA); 
console.log(varB);
console.log(varC);

// Outra maneira de resolver

[varA, varB, varC] = [varB, varC, varA];
console.log(varA, varB, varC);