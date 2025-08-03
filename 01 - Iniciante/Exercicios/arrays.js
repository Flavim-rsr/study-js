// Exercicio sobre arrays, funtions e objetos
function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm(evento){
        evento.preventDefault();            
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        
        let objeto = {
            nome: nome.value, 
            sobrenome: sobrenome.value,
            peso: peso.value, 
            altura: altura.value,
        };

        // Forma de fazer direto
        // pessoas.push({
        //     nome: nome.value,
        //     sobrenome: sobrenome.value,
        //     peso: peso.value,
        //     altura: altura.value
        // });

        pessoas.push(objeto);

        resultado.innerHTML += `<p>Nome: ${nome.value}</p>`;
        resultado.innerHTML += `<p>Sobrenome: ${sobrenome.value}</p>`;
        resultado.innerHTML += `<p>Peso: ${peso.value}</p>`;
        resultado.innerHTML += `<p>Altura: ${altura.value}</p>`;

        console.log(pessoas);

    }

    form.addEventListener('submit', recebeEventoForm);


}

meuEscopo();