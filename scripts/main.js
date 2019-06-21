var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === "/HTML-Estudo/site-teste/imagens/onda.jpg") {
      myImage.setAttribute ('src',"/HTML-Estudo/site-teste/imagens/praia.jpg");
    } else {
      myImage.setAttribute ('src',"/HTML-Estudo/site-teste/imagens/onda.jpg");
    }
}

function setUserName() {
  var myName = prompt('Por favor, digite seu nome.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Desafio, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Desafio, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}


/*var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';*/