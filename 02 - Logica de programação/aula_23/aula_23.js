// Aula 23 - Objeto Date

// Função Date é uma função construtora, para utiliza-la é necessario usar o operador new
const tresHoras = 60 * 60 * 3 * 1000; // Armazenando 3h na variavel
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras + umDia); // 01/01/1970 Timestamp unix ou época unix
/*
new Date();
new Date(valor);
new Date(dataString);
new Date(ano, mes, dia, hora, minuto, segundo, milissegundo);

Segundos vai somente até o 59, caso eu coloque 60 o minuto joga um pra frente
*/
const data1 = new Date(2019, 3, 20, 15, 60, 500); // Ano, mes, dia, horas, minutos, segundos, milesegundos
console.log(data1.toString());

// Passando a data como string
const dataString = new Date('2019-04-20 20:20:59');
console.log(dataString);

console.log('Dia', dataString.getDate());
console.log('Mês', dataString.getMonth() + 1);    // Mês começa do zero
console.log('Ano', dataString.getFullYear());
console.log('Hora', dataString.getHours());
console.log('Min', dataString.getMinutes());
console.log('Seg', dataString.getSeconds());
console.log('ms', dataString.getMilliseconds());
console.log('Dia semana', dataString.getDay());   // 0 - Domingo, 6 - Sábado
console.log(data.toString());

// Para pegar o timestamp do marco zero até hoje
console.log(Date.now());

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda( data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data3 = new Date();
const dataBrasil = formataData(data3);
console.log(dataBrasil);