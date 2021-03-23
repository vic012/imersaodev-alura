function evoluir() {
  var evolucao = parseInt(prompt('Qual evolução você deseja visualizar?'));
  
  if(evolucao === 1){
    var pokemon = document.getElementsByClassName("pokemon");
    pokemon[0].src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/172.png";
    var nome = document.getElementsByClassName("nome");
    nome[0].innerHTML = "Pichu";
    
  } else if(evolucao === 2){
    var pokemon = document.getElementsByClassName("pokemon");
    pokemon[0].src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png";
    var nome = document.getElementsByClassName("nome");
    nome[0].innerHTML = "Pikachu";
  } else if(evolucao === 3){
    var pokemon = document.getElementsByClassName("pokemon");
    pokemon[0].src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/026.png";
    var nome = document.getElementsByClassName("nome");
    nome[0].innerHTML = "Raichu";
  } else {
    alert('O Pikachu só tem 3 evoluções!')
  }
  
}