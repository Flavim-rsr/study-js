// Exercicio com numbers e Match

// O DOM (Document Object Model) em JS é uma interface que representa a estrutura de uma pagina HTML como um objeto, com o DOM podemos acessar, modificar, criar ou remover elementos e conteudos de uma pagina usando JS. Por exemplo podemos alterar textos, estilos, atributos e responder eventos do usuario

// Para manipular o DOM utilizamos o document, que é uma propiedade do objeto window (representa o documento HTML carregado na janela do navegador). E atraves do document que manipulamos o DOM

// Podemos usar o document.getElementById() para selecionar e alterar elementos HTML

let numero = Number(prompt(`Digite um numero: `));

// Pegando o elemento do id que esta no HTML e salvando em uma variavel
const numeroTitulo = document.getElementById(`numero-titulo`);
const texto = document.getElementById(`texto`);

// O innerHTML é uma propiedade que permite acessar ou alterar o conteudo HTML de um elemento 
numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Raiz quadrada: ${numero ** (1/2)} </p>`;
texto.innerHTML += `<p>Seu numero - 2 é: ${numero - 2} </p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;