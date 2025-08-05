// Aula 20 - if, else if e else

// Ele verifica se a hora é menor que 12, caso seja ira mostrar "Bom dia"
const hora = 10;
if (hora < 12) {
    console.log("Bom dia");
}



/*
Entre 0 - 11    Bom dia
Entre 12 - 17   Boa tarde
Entre 18 - 23   Boa noite
*/

// else if é utilizado para criar uma outra condição
// else é utilizado para caso de nenhuma das condições seja atendidas
const horas = 50;
if (horas >= 0 && horas <= 11) {
    console.log('Bom Dia');
} else if (horas >= 12 && horas <= 17) {
    console.log("Boa tarde");
} else if (horas >= 18 && horas <= 23) {
    console.log("Boa noite");
} else {
    console.log("Ola");
}

// if pode ser usado sozinho
// Sempre que utilizo a palavra else, preciso de um if antes
// Só posso ter apenas um else no final
// Posso ter varios else if na checagem
// Podemos usar condições sem else if

const tenhoGrana = false;
if (tenhoGrana) {
    console.log('Vou sair de casa');
} else {
    console.log('Não vou sair de casa');
}

let numero = 10;

if (numero >= 0 && numero <= 5) {
    console.log('O numero esta entre 0 e 5');
} else if (numero >= 6 && numero <= 8) {
    console.log('O numero esta entre 6 e 8');
} else if (1 === 1) {   // Verdadeiro
    console.log('LITERAL');
} else if (numero >= 9 && numero <= 11) {
    console.log('O numero esta entre 9 e 11');  
} else {
    console.log('O numero não esta entre 0 e 11');
}

console.log('... Aqui vai o resto do codigo'); // Sera executado independente do resultado do IF