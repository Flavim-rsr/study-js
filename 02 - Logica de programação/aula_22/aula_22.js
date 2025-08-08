// Aula 22 - Operação ternaria

// Operador ternario é uma forma resumida de fazer if e else
// ? (condição verdadeira)
// : (condição falsa)

// Sintaxe
// (condição) ? 'Valor para verdadeiro' : 'Valor para falso'

const pontuacaoUsuario = 999;

if (pontuacaoUsuario >= 1000) {
    console.log(`Usuario VIP`);
} else {
    console.log(`Usuario normal`);
}

const pontuacaoUsuario1 = 500;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';
console.log(nivelUsuario, corPadrao);
