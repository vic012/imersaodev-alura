var carros = [
  "https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2021-joy/mov/03-images/Masthead_desktop_JOY_HB-2020.jpg",
  "https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2021-joy-plus/mov/05-images/masthead-chevrolet-joy-plus-desktop.jpg",
  "https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2021-onix/mov/10-images/masthead-onix-desktop.jpg",
  "https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2021-onix-plus/mov/10-images/masthead-onix%20plus-premier-desktop.jpg",
  "https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2021-cruze-premier/mov/02-images/novo-cruze-premier-desk.jpg",
  "https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2021-novo-cruze-6/mov/01-images/novo-cruze-sport6-desk.jpg",
];

var nome = ["Joy", "Joy Plus", "Onix", "Onix Plus", "Cruze", "Cruze Sport6"];

var escolha = prompt("Escolha um carro", ["Joy, Joy Plus, Onix, Onix Plus, Cruze, Cruze Sport6"]);

for (var i = 0; i < nome.length; i++){
  if (escolha === nome[i]){
    var carro = document.getElementsByClassName("carro");
    carro[0].src = carros[i];
  } 
}