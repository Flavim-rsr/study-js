// Aula 13 - Arrays (Basico)

// Os arrays são como uma lista de alguma coisa, podendo ser String, number etc.

const alunos = ['Luiz', 'Maria', 'João', 1, true, null];
console.log(alunos);

// O ideal é sempre ter o mesmo tipo de dado dentro do array
let alunos2 = ['Luiz', 'Maria', 'João'];
console.log(alunos2);

// Caso usamos o typeof no array ele vai retornar um tipo de objeto, porem para saber se realmente é um array podemos usar o instanceof  Array que ira retornar true ou false
console.log(typeof alunos2);
console.log(alunos2 instanceof Array);

// Cada elemento de um array pode ser acessado por um indice.
//           0        1       2         3
alunos2 = ['Luiz', 'Maria', 'João', 'Flavio'];
console.log(alunos[2]);

// Tambem é possivel editar uma posição do array, é possivel adicionar um novo indice com um novo valor no array
alunos2[0] = 'Eduardo';
alunos2[4] = 'Hayala';
console.log(alunos2);

// Para saber o tamnho do array podemos usar o length
console.log(alunos2.length);

// Temos uma função que adiciona um elemento no final do array sem necessidade de saber o tamanho dele push
alunos2.push('Elianete');
console.log(alunos2);

// Para adicionar no começo do array na primeira posição usamos a função unshift, os outros elementos são movidos um indice para a direita
alunos2.unshift('Ruan');
console.log(alunos2);

// Podemos remover um elemento no final do array usando o pop
alunos2.pop();
console.log(alunos2);

// É possivel salvar o elemento removido em uma variavel
const removido = alunos2.pop();
console.log(removido);

// Para remover o primeiro elemento usamos o shift
const removido2 = alunos2.shift();
console.log(removido2);

// É possivel remover um elemento do array sem mudar o restante dos indices usando o delete, porem isso deixa um indice do array vazio
delete alunos2[2];
console.log(alunos2);

// Para fatiar um array usamos o slice, passando dois parametros da onde ele começa e da onde ele termina
console.log(alunos2.slice(0, 2));