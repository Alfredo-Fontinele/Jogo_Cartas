// function geradorDeCartas() {
//   nome_personagem = prompt("Nome do Personagem: ")
//   atributos = {
//     nome: nome_personagem,
//     ataque: 0,
//     defesa: 0,
//     magia: 0
//   }
//   ataq = parseInt(prompt("Poder de Ataque: "))
//   def = parseInt(prompt("Poder de Defesa: "))
//   mag = parseInt(prompt("Poder de Magia: "))
  
//   atributos.ataque = ataq;
//   atributos.defesa = def;
//   atributos.magia = mag;
//   alert("Carta Criada com Sucesso!!!")
// }

let carta1 = {
  nome: "Bulbasauro",
  atributos: {
    ataque: 7,
    defesa: 8,
    magia: 6
  }
};
  
let carta2 = {
  nome: "Darth Vader",
  atributos: {
    ataque: 9,
    defesa: 8,
    magia: 2
  }
};
  
let carta3 = {
  nome: "Shiryu de Dragão",
  atributos: {
    ataque: 5,
    defesa: 9,
    magia: 10
  }
};
  
let cartas = [carta1, carta2, carta3];

let carta_maquina = 0;
let carta_jogador = 0;
  
function sortearCarta() {
  let carta_sorteada_maquina = parseInt(Math.random() * 3);
  carta_maquina = cartas[carta_sorteada_maquina];
  
  let carta_sorteada_jogador = parseInt(Math.random() * 3);
  carta_jogador = cartas[carta_sorteada_jogador];
  
  while (carta_sorteada_maquina == carta_sorteada_jogador) {
    carta_sorteada_jogador = parseInt(Math.random() * 3);
  }
  carta_jogador = cartas[carta_sorteada_jogador];    
  console.log(`\nCarta do Jogador`);
  console.log(carta_jogador)
  console.log(`\nCarta da Máquina`);
  console.log(carta_maquina);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
}

function exibirOpcoes() {
  let opcoes = document.getElementById("opcoes");
  let opcoesTexto = "";

  for (let atributo in carta_jogador.atributos) {
    opcoesTexto += `<input id='atributo' type='radio' name='atributo' value='${atributo}'/>${atributo}`
  }

  opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
    return radioAtributos[i].value;
    }
  }
}

function jogar() {

  var atributoSelecionado = obtemAtributoSelecionado();
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = carta_jogador.atributos[atributoSelecionado];
  var valorCartaMaquina = carta_maquina.atributos[atributoSelecionado];

  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = "Você venceu";
  } else if (valorCartaMaquina > valorCartaJogador) {
    elementoResultado.innerHTML = "Você perdeu, a carta da máquina é maior";
  } else {
    elementoResultado.innerHTML = "Empatou";
  }

  console.log(carta_maquina);
}

// Parei em 1:08:00
//link: https://imersao.dev/aulas/aula07-supertrunfo?utm_source=ActiveCampaign&utm_medium=email&utm_content=Imers%C3%A3o+Dev+Aula+07%3A+Crie+seu+pr%C3%B3prio+jogo+de+cartas%21&utm_campaign=%5BALURA+IMERS%C3%95ES%5D+%28Dev+-+4%C2%AA+edi%C3%A7%C3%A3o%29+Aula+07