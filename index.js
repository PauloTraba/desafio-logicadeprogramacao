// Declarando as variáveis
let herois = [
  { nome: "Wolverine", xp: 1500 },
  { nome: "Magneto", xp: 2500 },
  { nome: "Professor Xavier", xp: 6000 },
  { nome: "Tempestade", xp: 7500 },
  { nome: "Ciclope", xp: 8500 },
  { nome: "Fera", xp: 9500 },
  { nome: "Jean Grey", xp: 10000 },
  { nome: "Mística", xp: 11000 }
];

// Função para determinar o nível com base no XP
function determinarNivel(xp) {
  if (xp < 1000) {
      return "Ferro";
  } else if (xp >= 1001 && xp <= 2000) {
      return "Bronze";
  } else if (xp >= 2001 && xp <= 5000) {
      return "Prata";
  } else if (xp >= 5001 && xp <= 7000) {
      return "Ouro";
  } else if (xp >= 7001 && xp <= 8000) {
      return "Platina";
  } else if (xp >= 8001 && xp <= 9000) {
      return "Ascendente";
  } else if (xp >= 9001 && xp <= 10000) {
      return "Imortal";
  } else {
      return "Radiante";
  }
}

// Usando laço de repetiçao e exibindo informações sobre os heróis e o nível
for (let i = 0; i < herois.length; i++) {
  let heroi = herois[i];
  let nivel = determinarNivel(heroi.xp);
  console.log(`O Herói de nome ${heroi.nome} está no nível de ${nivel}`);
}
