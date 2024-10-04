// Variáveis
let nome = "Leopoldo"; // Nome do herói
let xp = 3000; // Substitua pela quantidade de experiência do herói

// Estrutura de decisão
let nivel;
if (xp < 1000) {
nivel = "Ferro";
} else if (xp <= 3000) {
nivel = "Bronze";
} else if (xp <= 7000) {
nivel = "Prata";
} else if (xp <= 9000) {
nivel = "Ouro";
} else if (xp <= 10000) {
nivel = "Platina";
} else if (xp <= 15000) {
nivel = "Ascendente";
} else if (xp <= 20000) {
nivel = "Imortal";
}else if (xp <= 25000) {
nivel = "Radiante";
}

// Saída
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
