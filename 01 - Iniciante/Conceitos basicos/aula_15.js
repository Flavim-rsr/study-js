// Aula 15 - Introdução ao basico de objetos em JS

// Objetos em JS são estruturas que permitem armazenar dados em pares de chave e valor, são usados para representar entidades com propiedades e comportamentos
// Cada onjeto contem seus atributos, no exemplo o a seguir temos nome, sobrenome e idade

const pessoa1 = {
    nome: 'Ana',
    sobrenome: 'Laura',
    idade: 27
};

const pessoa2 = {
    nome: 'Maria',
    sobrenome: 'Oliveira',
    idade: 28
};

// Acessando valores da pessoa1
console.log(pessoa1.nome);

// Para facilitar podemos criar uma função que cria pessoas (factory função que cria objetos)
function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome, 
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa3 = criaPessoa('Luiz', 'Otavio', 25);
const pessoa4 = criaPessoa('Flavio', 'Rodrigo', 23);
const pessoa5 = criaPessoa('Wesley', 'Souza', 30);

console.log(pessoa5.nome);

// Quando vamos obter valores iguais aos do parametro é possivel fazer direto eliminando os :
function criaPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}

const pessoa6 = criaPessoa('Jean', 'Souza', 39);
console.log(pessoa6.nome);

// Funções dentro de um objeto são chamados de metodos (o this nesse exemplo se referencia ao objeto pessoa7)
const pessoa7 = {
    nome: 'Ana',
    sobrenome: 'Laura',
    idade: 27,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
        console.log(`A minha idade atual é ${this.idade}`);
    }, 
    incrementaIdade(){
        this.idade++;
    }
};

pessoa7.fala();
pessoa7.incrementaIdade();
pessoa7.fala();