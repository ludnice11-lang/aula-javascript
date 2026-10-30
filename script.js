
// Variável é um espaço onde podemos guardar um valor.

// "let" é uma palavra-chave usada para declarar uma variável.
// "nome" é o nome que escolhemos para a variável.
// "=" atribui um valor à variável.
// "Ludnice" é o valor que estamos guardando.
let nome = "Ludnice";

// Aqui criamos outra variável chamada "idade".
// Como 36 é um número, não usamos aspas.
let idade = 36;


// console.log() serve para mostrar uma informação no console.
// Aqui estamos pedindo para mostrar o valor armazenado em "nome".
console.log(nome);

// Aqui mostramos o valor armazenado em "idade".
console.log(idade);

let estudando = true; // Boolean (verdadeiro ou falso)
console.log(estudando);
document.getElementById("mensagem").textContent = "Olá, meu nome é " + nome;
document.getElementById("mensagem").textContent = "Olá, meu nome é " + nome + " e tenho " + idade + " anos.";

if (estudando) {
    console.log("Continue assim");
} else {
    console.log("Que tal começar hoje?");
}

// Verifica se a idade é 18 ou mais
if (idade >= 18) {
    // Se for, escreve na página o "Olá" junto com "maior de idade"
    document.getElementById("mensagem").textContent = "Olá, meu nome é " + nome + " e tenho " + idade + " anos. Você é maior de idade.";
} else {
    // Se não for, escreve o "Olá" junto com "menor de idade"
    document.getElementById("mensagem").textContent = "Olá, meu nome é " + nome + " e tenho " + idade + " anos. Você é menor de idade.";
}


// Primeiro teste: a idade é menor que 12?
if (idade < 12) {
    console.log("Você é uma criança");

// Então só falta saber se é menor que 18.
} else if (idade < 18) {
    console.log("Você é adolescente");

} else if (idade < 60) {
    console.log("Você é adulta");
// Se nenhuma condição acima foi verdadeira, a idade é 60 ou mais.
} else {
    console.log("Você é idosa");
}

