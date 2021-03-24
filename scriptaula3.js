function advinhar(){
  
  var tentativas = 0;
  var numeroMagico = parseInt(Math.random() * 10);
  var contagem = 3;
  
  while (tentativas < 3){
    var numero = parseInt(prompt('Qual é o seu chute?'));

    if (numero === numeroMagico && tentativas === 0){
      var texto = document.getElementsByClassName('texto');
      var img = document.getElementsByClassName('premio');
      img[0].src="http://www.minimundi.com.br/cdn/imagens/produtos/det/ferrari-458-italia-ferrari-race-e-play-1-24-18-26003-070210_a.jpg";
      return texto[0].innerHTML ='Você acertou de primeira, o seu prêmio é uma ferrari';
    } else if (numero === numeroMagico && tentativas === 1){
      var texto = document.getElementsByClassName('texto');
      var img = document.getElementsByClassName('premio');
      img[0].src="https://images.tcdn.com.br/img/img_prod/747391/miniatura_moto_ducati_multistrada_1200s_1_18_maisto_5451_1_20201029111537.jpg";
      return texto[0].innerHTML ='Você acertou na segunda tentativa, o seu prêmio é uma Ducati';
    } else if (numero === numeroMagico && tentativas === 2){
      var texto = document.getElementsByClassName('texto');
      var img = document.getElementsByClassName('premio');
      img[0].src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_TZrXRqmMTW5NSrljResIq7tVo9Rd9S_xKw&usqp=CAU";
      return texto[0].innerHTML ='Você acertou na terceira tentativa, o seu prêmio é um Celta';
    } else {
      tentativas = tentativas + 1;
      contagem = contagem - 1;
      if (numero > numeroMagico){
        if (contagem == 0){
          alert('Você não tem mais nenhuma tentativa');
        } else {
          alert('Você errou, o número Mágico é menor, você ainda tem: ' + contagem + ' tentativas.');
        }
          
      } else if (numero < numeroMagico){
        if (contagem == 0){
          alert('Você não tem mais nenhuma tentativa');
        } else {
          alert('Você errou, o número Mágico é menor, você ainda tem: ' + contagem + ' tentativas.');
        }
      }
    }
    
    if (tentativas === 3){
      var texto = document.getElementsByClassName('texto');
      var img = document.getElementsByClassName('premio');
      img[0].src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV9I9BuH2a83KQReat8lUorEkvFCvTMHfhkw&usqp=CAU";
      return texto[0].innerHTML ='Que pena, você não conseguiu advinhar o Número Mágico';
    }
  }
}