// Aula 04 - Variaveis com Let

// Variaveis são espaços na memoria que guardam valores, e podem ser alterados durante a execução do programa
// Variaveis podem ser modificadas, ou seja, podemos atribuir novos valores a elas

// O nome João por ser muito repetido vamos usar uma variavel para guardar o nome dele
// Para criar uma variavel usamos a palavra-chave `let` ou `var`
// Criar variaveis com nomes significativos é uma boa prática, pois facilita a leitura do código
// Não é possivel criar uma variavel com o nome de uma palavra reservada do JavaScript, como `let`, `var`, `const`, `if`, `else`, `for`, `while`, etc.
// O nome de uma variavel não pode começar com um número, indicado começar com letras minusculas
// Nome da variavel não pode conter espaços nem hifen
// As variaveis são case-sensitive, ou seja, `nome`, `Nome` e `NOME` são variaveis diferentes
// Não é possivel redeclarar uma variavel com o mesmo nome usando `let` ou `var` no mesmo escopo
// É possviel atribuir um valor de uma variavel a uma outra variavel por exemplo a conta envolvendo duas variaveis e o resultado é atribuido em outra variavel

let nome = "Henrique";


console.log(nome, "nasceu em 1984");
console.log("Em 2000", nome, "conheceu Maria");
console.log(nome, "casou-se com Maria em 2012");
console.log("Maria teve um filho com", nome,  "em 2015");
console.log("O filho de", nome, "se chama Eduardo");

// Caso você crie uma variavel sem inicializar ela, o valor dela será undefined (a forma que a engine aponta para indicar que não tem valor)
let idade;  // Declarando uma variavel
console.log(idade);

idade = 39; // Atribuindo um valor a variavel
console.log(idade);

// A engine respeita a ordem de execução do código, ou seja, se você tentar acessar uma variavel antes de atribuir um valor a ela, o valor será undefined

// Exemplo de uso de uma variavel onde ela pega outro valor
let primeiroNumero = 5;
let segundoNumero = 10;
let resultado = primeiroNumero + segundoNumero;
let resultadoDuplicado = resultado * 2;
console.log(resultadoDuplicado);
resultadoDuplicado = resultadoDuplicado + 10; // Modificando o valor da variavel (porem ele perde o primeiro valor)
console.log(resultadoDuplicado);

// A variavel sempre armazena o ultimo valor atribuido a ela, ou seja, se você atribuir um novo valor a ela, o valor anterior será perdido