// Aula 19 - Avaliação de curto-circuito (Short-Circuit)

/*
&& -> Todas as expressões precisam ser verdadeiras (quando encontra um valor falso para de verificar as outras expressões)
|| -> Uma das expressões precisam ser verdadeiras  (quando encontra um valor verdadeiro para de verificar as outras expressões)

Valores que avaliam em falso

false (falso literal)

FALSY (finge ser falso)
0
'' "" ``
null / undefined
NaN
*/

// No exemplo a seguir o && vai retornar o ultimo valor verdadeiro encontrado
console.log('Flavio' && 'Maria');

// Caso contenha um valor falso ou FALSY ele vai ser retornado
console.log('Flavio' && '' && 'Maria');

function falaOi () {
    return 'Oi';
}

const vaiExecutar = false;
console.log(vaiExecutar && falaOi());

// Na expressão || ele retorna o primeiro valor verdadeiro encontrado
console.log(0 || false || null || 'Luiz Otavio' || true);

// Exemplo pratico
const corUsuario = null;
const corPadrao = corUsuario || 'red';
console.log(corPadrao);