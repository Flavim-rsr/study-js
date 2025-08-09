// Aula 24 - Switch/Case

const data = new Date('1987-04-21 00:00:00');
const diaSemana = data.getDay();
let diaSemanaTexto;

// Usando o Switch case para mostrar qual dia da semana é
// Quando ele cai no break ele não executa mais nada pra frente, assim como o return
// O default é como o else do if, não tem necessidade de utilizar o break, porém é possivel 

switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        break
    case 1:
        diaSemanaTexto = 'Segunda';
        break;
    case 2:
        diaSemanaTexto = 'Terça';
        break;
    case 3:
        diaSemanaTexto = 'Quarta';
        break;
    case 4:
        diaSemanaTexto = 'Quinta';
        break;
    case 5:
        diaSemanaTexto = 'Sexta';
        break;
    case 6:
        diaSemanaTexto = 'Sábado';
        break;
    default:
        diaSemanaTexto = '';
        break;
}

console.log(diaSemanaTexto);

// Utilizando em uma function podemos substituir o break por return

function getDiaSemanaTexto (diaSemana) {
    
    let diaSemanaTexto; 

    switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        return diaSemanaTexto;
    case 1:
        diaSemanaTexto = 'Segunda';
        return diaSemanaTexto;
    case 2:
        diaSemanaTexto = 'Terça';
        return diaSemanaTexto;
    case 3:
        diaSemanaTexto = 'Quarta';
        return diaSemanaTexto;
    case 4:
        diaSemanaTexto = 'Quinta';
        return diaSemanaTexto;
    case 5:
        diaSemanaTexto = 'Sexta';
        return diaSemanaTexto;
    case 6:
        diaSemanaTexto = 'Sábado';
        return diaSemanaTexto;
    default:
        diaSemanaTexto = '';
        return diaSemanaTexto;
}
}

const data2 = new Date('1987-04-23 00:00:00');
const diaSemana2 = data2.getDay();
const diaSemanaTexto2 = getDiaSemanaTexto(diaSemana2);

console.log(diaSemanaTexto2);