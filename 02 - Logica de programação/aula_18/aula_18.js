// Aula 18 - Operadores lógicos

/*
Operadores Lógicos
&& -> AND = E  ->  Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR = OU  ->  Apenas uma expressão deve ser verdadeira para retornar true
! -> NOT = NÃO (negação) -> Inverte uma expressão
*/

// Nesse exemplo retorna falso, pois usando o operador AND todas as expressões devem ser verdadeiras para retornar true
const expressaoAnd = true && true && true && false && true;
console.log(expressaoAnd);

// Nesse exemplo basta apenas uma expressão ser verdadeira para a expressão completa retornar verdadeira, para retornar falso todas elas devem ser falsas
const expressaoOr = true || false;
console.log(expressaoOr);

// Exemplo pratico
const usuario = 'Flavio';   // form usuário digitou
const senha = '123456';     // form usuário digitou

// Para ele logar no sistema as duas operações precisam ser verdadeiras
//                              true                 false
const vaiLogar = usuario === 'Flavio' && senha === '12345';
console.log(vaiLogar);

// Operador NOT inverte uma expressão, caso ela seja true passa ser false
console.log(!true);

// É possivel negar quantas vezes for necessario, no exemplo a seguir ele volta para o valor original
console.log(!!true);