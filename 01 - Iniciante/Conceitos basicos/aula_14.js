// Aula 14 - Introdução ao basico de funções em JS

// Temos funções que retornam valores e funções que não retornam, para nomea-las usamos as mesmas regras utilizadas para nomear uma variavel

function saudacao(nome) {
    console.log(`Bom dia ${nome}!`);
}

// Tudo que é criado dentro de uma função não é possivel de utilizar do lado de fora da função
// Diferença entre parametro e argumento, o parametro é o nome da variavel que você utiliza ba declaração da função, argumento é o valor real que você passa para a função quando a chama
// É possivel passar argumentos na chamada da função para utiliza-los dentro da função

// Chamar a função, cada chamada executa a função uma vez, sendo possivel passar argumentos diferentes a cada vez
saudacao(`Flavio`);
saudacao(`Geraldo`);
saudacao(`Ruan`);

// Para ser possivel armazenar um valor que a função vai retornar podemos usar o return, quando a engine do JS encontra a palavra return ele encerra a leitura da função e não faz mais nada depois do return dentro da função
function saudacao2(nome) {
    return `Bom dia ${nome}!`;
}

const funcao2 = saudacao2(`Lucas`);
console.log(funcao2);

// Exemplo de função que faz um calculo, usando dois parametros
function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 2));

// Não é possivel acessar o resultado fora da função porque ele esta protegido pelo escopo da função, fazendo com que seja possivel acessar somente dentro da função
// Isto gera um erro falando que a variavel não foi declarada
// console.log(resultado);

// Caso você chame a função sem passar os argumentos corretos de acordo com a declaração ele não ira executa-la da forma esperada
// Neste caso ele vai concatenar as duas strings, o correto seria passar dois Number para fazer um calculo
console.log(soma('5' + '5'));

// Para criar uma função anonima (função sem nome)
const raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(9));

// Maneira mais moderna de criar funções arrow function
const raiz2 = (n) => n ** 0.5;