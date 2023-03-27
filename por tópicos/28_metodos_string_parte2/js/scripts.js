// toLowerCase -> Tudo minúsculo e toUpperCase -> Tudo maiúsculo

var frase = "Esta é a frase que vamos manipular";

var fraseCaixaAlta = frase.toUpperCase();

console.log(fraseCaixaAlta);

console.log(frase.toLowerCase());

console.log(frase.toUpperCase());

// trim -> Para retira os espaços

var nome = "         Gustavo    ";

console.log(nome);

var nomeTrim = nome.trim();

console.log(nomeTrim);

// split -> Quando quer transformar um texto em array, ou o contrário, transformar um array em um texto.

console.log(frase.split(" "));

var tags = "PHP, JavaScript, HTML, CSS";

console.log(tags.split(", "));

// LastIndexOf

var fraseDois = "Eu quero o a última palavra teste desta frase de teste";

console.log(fraseDois.indexOf("teste")); // Depois de quantos espaços na frase esta a palavra.

console.log(fraseDois.lastIndexOf("teste")); // Depois de quantos espaços na frase esta a palavra, mas mostra em relação a última palavra da frase.



