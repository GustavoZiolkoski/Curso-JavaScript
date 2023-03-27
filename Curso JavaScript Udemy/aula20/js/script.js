function meuEscopo () {
    const form = document.querySelector('.form'); // .form para selecionar quando for class. #form para selecionar quando for id.
    const resultado = document.querySelector('.resultado');
    const pessoas = [];

    /*
    form.onsubmit = function (evento) {
        alert(1); //Quando o formulário for enviado deverá aparecer 1.
    };
    */
   
   function recebeEventoForm (evento) {
        evento.preventDefault(); //Para evitar que a página fique atualizando.
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ` + `${peso.value} ${altura.value}</p>`

   }
   form.addEventListener('submit', recebeEventoForm); // Para ser avisado toda vez que for feito algum evento. (como um enviar na página)
   
}
meuEscopo();
