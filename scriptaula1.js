function moeda(){
  var moeda = prompt('Digite um valor que deseja converter de Libra em Dólar');
  var dolar = parseFloat(moeda);
  var libra = 1.39;
  var conversao = (dolar * libra).toFixed(2);
  alert('£ ' + moeda + ' corresponde a ' + conversao + ' R$');
}

function temperatura(){
  var temperatura = prompt('Digite um valor que deseja converter de graus Celsius para Fahrenheit');
  var celsius = parseFloat(temperatura);
  var fahrenheit = ((9 / 5) * celsius + 32).toFixed(2);
  alert(temperatura + ' °C' + ' corresponde a ' + fahrenheit + ' °F');
}