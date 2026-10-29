// VARIÁVEIS
// Variável é um espaço onde podemos guardar um valor.

// "let" é uma palavra-chave usada para declarar uma variável.
// "nome" é o nome que escolhemos para a variável.
// "=" atribui um valor à variável.
// "Ludnice" é o valor que estamos guardando.
let nome = "Ludnice";

// Aqui criamos outra variável chamada "idade".
// Como 36 é um número, não usamos aspas.
let idade = 36;


// CONSOLE.LOG
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

