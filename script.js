// ATIVIDADE 1
console.log("--- Média das notas ---");

let nota1 = 7.5;
let nota2 = 8.0;
let nota3 = 6.5;

let mediaFinal = (nota1 + nota2 + nota3) / 3;

console.log("Média Final: " + mediaFinal.toFixed(2));

let valorA = 10;
let valorB = "10";

if (valorA === valorB) {
    console.log("As variáveis são estritamente iguais.");
} else {
    console.log("As variáveis NÃO são estritamente iguais (tipos diferentes: número e string).");
}

if (valorA == valorB) {
    console.log("As variáveis são iguais em valor (conversão de tipo realizada).");
}

console.log("");
console.log("--- Classificação por pontuação ---");

const pontuacao = 85;

if (pontuacao >= 90) {
  console.log("Classificação: A");
} else if (pontuacao >= 70) {
  console.log("Classificação: B");
} else {
  console.log("Classificação: Precisa melhorar");
}

console.log("");
console.log("--- Atração radical ---");

let idade = 18;
let altura = 1.65;

let podeEntrar = idade >= 16 && altura >= 1.60;

if (podeEntrar) {
    console.log("A pessoa está apta a entrar na atração.");
} else {
    console.log("A pessoa NÃO está apta a entrar na atração.");
}

console.log("");
console.log("--- Radar de velocidade ---");

const velocidade = 70;

if (velocidade <= 60) {
    console.log("Velocidade permitida");
} else if (velocidade <= 80) {
    console.log("Multa leve por excesso de velocidade");
} else {
    console.log("Multa grave: suspensão temporária do direito de dirigir");
}