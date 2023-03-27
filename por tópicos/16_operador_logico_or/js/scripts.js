var idade = 16;
var nome = "Pedro";
// || = OR/OU
if(nome == "João" || idade == 16){
    console.log("Pode entar na aula de esgrima.");
} else {
    console.log("Não pode entrar.");
}

if(nome == "João" && 15 > 20 || 10 == 10){
    console.log("Testando");
} else {
    console.log("Não entrou.");
}

if((nome == "João" || 15 > 20) && 10 == 10){
    console.log("Testando");
} else {
    console.log("Não entrou.");
}