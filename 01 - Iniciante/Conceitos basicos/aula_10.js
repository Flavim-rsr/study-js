// Aula 10 - Mais sobre Strings
// Para saber mais sobre funções js pode procurar documentações no MDN e no W3Schools

// Caso eu tenha uma String com aspas simples eu posso usar as aspas duplas dentro dela (ou o inverso)
let string = 'Ola meus "amigos"';

console.log(string);

// É possivel escapar o caracter de aspas dentro da string caso seja necessario usar uma aspa igual dentro da que esta de fora utilize o barra invertida para isso (\)

let texto = "Um \"texto\"";
console.log(texto);

// Caso eu queira exibir uma barra invertida dentro do texto basta usar duas
let texto2 = "Um \\texto";
console.log(texto2);

// Strings no Js são indexadas, pois é possivel iterar por cada caracter, o indice zero representa o primeiro elemento
//            01234567
let texto3 = "Um texto"

// É possivel visualizar apenas um caracter de acordo com sua posição na String
// Caso pego uma posição que não contenha na String será retornado "undefined"
console.log(texto3[4]);

// Temos uma função no Js que é possivel recuperar o elemento que esta na posição especifica, quando saimos do range de posições da String usando o charAt ele retorna vazio
console.log(texto3.charAt(6));

// A função concat faz a mesma coisa que o sinal de +
console.log(texto3.concat(' ', 'em', ' ', 'um', ' lindo dia'));
console.log(texto3 + ' em um lindo dia');
console.log(`${texto3} em um lindo dia`);          // Template Strings

// Para saber qual o indice que começa a palavra texto é possivel usar o indexOf, caso não seja encontrado ele retorna -1 (Sensitive Case)
console.log(texto3.indexOf('texto'));
// Caso eu queira pegar uma ocorrencia a partir de um indice tambem é possivel
// No exemplo a seguir ele pega o primeiro 'o' depois do indice 3
console.log(texto3.indexOf('o', 3));

// A função lastIndexOf ele começa do final da string, e percorre a String
console.log(texto3.lastIndexOf('m', 3));

// A função match é utilizada para buscar valores em uma String utilizando expressões regulares, ela retorna um array com as correspondencias encontradas e detalhes da primeira ocorrencia
console.log(texto3.match(/[a-z]/g));    // Retorna todas as ocorrencias que se encaixa
console.log(texto3.match(/[a-z]/));     // Retorna a primeira ocorrencia com detalhes

const valor = "O dia está lindo";
const resultado = valor.match(/dia/);
console.log(resultado); 

// Podemos utilizar a flag "g" (global), retorna todas as ocorrencias encontradas
const valor1 = "dia dia dia";
const resultado2 = valor1.match(/dia/g);
console.log(resultado2); 

// A função search retorna o indice do que foi solicitado similar com o indexOf porem aceita expressões regulares
console.log(texto3.search(/x/));

// A função replace é utilizado para substituir um valor pelo outro tambem aceita expressões regulares
console.log(texto3.replace('Um', 'Outro'));
console.log(texto3.replace(/Um/, 'Outra'));

// Ele vai substituir sempre a primeira ocorrencia que ele encontrar, caso queira substituir todas utilize a flag "g"
let texto4 = "O rato roeu a roupa do rei de roma";
console.log(texto4.replace(/r/, '#'));
console.log(texto4.replace(/r/g, '#'));

// Para pegar o tamnho da String é utilizado o atributo length
//            0123456789
let texto5 = "Um texto a";
console.log(texto5.length);

// Para pegar apenas um trecho da String podemos usar a função slice ela vai fatiar a String de acordo com os indices passados
console.log(texto5.slice(3, 8));

// Tambem é possivel utilizar valores negativos, onde ele pega o tamnho da String e subtrai mostrando o valor de trás pra frente
console.log(texto5.slice(-5));
console.log(texto5.slice(-5, -2));

// A função substring tambem é utilizada para retornar uma parte da String
console.log(texto5.substring(3, 8)); 

// Caso eu queira dividir uma String eu posso usar a função split, ela vai dividir a String em partes usando um parametro passado e retornando um array com essas partes
console.log(texto4.split('r'));
console.log(texto4.split('r', 3)); // O segundo parametro é para quantas ocorrencias

// Para deixar toda a String em letras maisculas podemos usar a função toUpperCase e em minusculas utilize o toLowerCase
console.log(texto4.toLocaleUpperCase());
console.log(texto4.toLocaleLowerCase());