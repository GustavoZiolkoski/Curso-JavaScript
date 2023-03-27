/*
Gustavo Ponte Ziolkoski tem 26 anos, pesa 81kg tem 1.83 de altura e seu IMC é de 24.187046492878256.
Gustavo Ponte Ziolkoski nasceu em 1996.
*/
const nome = 'Gustavo Ponte';
const sobrenome = 'Ziolkoski';
const idade = 26;
const peso = 81;
const alturaEmM = 1.83;
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;
indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
let anoAtual = 2022;
anoNascimento = anoAtual - idade;
console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg, tem', alturaEmM, 'de altura e seu IMC é de', indiceMassaCorporal);
console.log(nome, sobrenome, 'nasceu em', anoNascimento, '.');
console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg, tem ' + alturaEmM + ' de altura e seu IMC é de ' + indiceMassaCorporal);
console.log(nome + ' ' + sobrenome + ' nasceu em ' + anoNascimento + '.');
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`);
