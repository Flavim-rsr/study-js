// Aula 16 - Diferença entre valores primitivos e valores por referencia

/*
Primitivos (imutaveis) - string, number, boolean, undefined, null, (bigint, symbol) - Copiados (independente)

Referencia (mutável) - array, object, function - Passados por referencia (dependentes)

*/

// Quando falamos que o tipo é imutavel estamos falando do valor da variavel, no exemplo a seguir vamos mostrar que não conseguimos alterar o valor de um indice de uma string

let nome = 'Flavio';
nome[0] = 'R';  // Tentando mudar o primeiro indice (F) para R, porem não é possivel pois o tipo primitivo é imutavel
console.log(nome[0], nome);

let a = 'A';
let b = a;  // Cópia independente
console.log(a, b);

a = 'Outra coisa';
console.log(a, b);


// Exemplo de um dado passado por referencia
let c = [1, 2, 3]
let d = c;  // Valor passado por referencia, aponta para o mesmo local da memoria, tornando "d" dependente de "c"
console.log(c, d);

// "d" tambem será afetado pois eles apontam para o mesmo valor na memoria
c.push(4);
console.log(c, d);

// Para fazermos uma copia podemos usar o spred (...), para ser a copia de um valor passado por referencia
let e = [...c];  // O array "e" é independente de c, pois foi feito uma copia
c.pop();
console.log(c, d, e);

// Tambem é possivel utilizar em objetos
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
};

const x = pessoa;
pessoa.nome = 'João'; // Alterando o atributo nome do objeto "pessoa"
console.log(x); // Mostrando que "x" é dependente de "pessoa" e tambem foi alterado

/*

Usando o spread no objeto "pessoa" fazendo com que "x" seja independente de pessoa
const x = {...pessoa};

*/