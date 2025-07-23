// Aula 05 - Constantes

// Não podemos criar constantes com palavras reservadas
// Constantes precisam ter nomes significativos
// Não pode começar o nome de uma constate com um número
// Não pode conter espaços nem hifen
// Case-sensitive, ou seja, `nome`, `Nome` e `NOME` são constantes diferentes
// Não pode modificar o valor de uma constante
// Não podem ser declaradas sem valor inicial (const nome2;)
// É possviel atribuir um valor de uma constante a uma outra constante por exemplo a conta envolvendo duas constantes e o resultado é atribuido em outra constante

const nome = "João";
console.log(nome);

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero + segundoNumero;
const resultadoDuplicado = resultado * 2;
console.log(resultado);
console.log(resultadoDuplicado);

// Para saber o tipo de uma variavel ou constante podemos usar o operador `typeof`
// String = Text || Number = Numeros
console.log(typeof nome); // string
console.log(typeof segundoNumero); // number