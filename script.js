/*
var conteudo = document.getElementById("conteudo")
var conteudo = ["link1","link2","link3"]
var link1 = document.createElement('img')

var link2 = "panfleto numero 2"
var link3 = "panfleto numero 3"
console.log(conteudo)

var img = document.createElement('img');
*/

// Seleciona a div onde a imagem será inserida (substitua "myDiv" pelo ID da sua div)
const div = document.getElementById('conteudo');

// Cria um novo elemento de imagem
const panfleto1 = document.createElement('img');

// Define o atributo src com o caminho da imagem
panfleto1.src = 'file:///C:/Users/Andr%C3%A9/Downloads/download.jfif';

// Define atributos opcionais (largura, altura, etc.)
panfleto1.width = 200;
panfleto1.height = 150;
panfleto1.alt = 'Descrição da imagem';

// Adiciona a imagem à div
div.appendChild(panfleto1);



// Seleciona a div onde a imagem será inserida (substitua "myDiv" pelo ID da sua div)

// Cria um novo elemento de imagem
const panfleto2 = document.createElement('img');

// Define o atributo src com o caminho da imagem
panfleto2.src = 'file:///C:/Users/Andr%C3%A9/Downloads/download%20(1).jfif';

// Define atributos opcionais (largura, altura, etc.)
panfleto2.width = 200;
panfleto2.height = 150;
panfleto2.alt = 'Descrição da imagem';

// Adiciona a imagem à div
div.appendChild(panfleto2);


