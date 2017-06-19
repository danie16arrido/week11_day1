
var app = function () {
  var data = {
    catName: "Lucipurr",
    catsFood: "Dog's heart",
    catsImg: "https://img.wikinut.com/img/19cgiwd67cvbziym/jpeg/0/Satanic-Cat.jpeg"
  }
  var ulElement = document.createElement('ul');
  ulElement.classList.add('cat');
  // console.log( ulElement );

  var nameElement = document.createElement('li');
  nameElement.innerText = "Name: " + data.catName;
  // console.log( nameElement );

  var foodElement = document.createElement('li');
  foodElement.innerText = "Favorite Food: " +  data.catsFood;
  // console.log( foodElement );

  var picElement = document.createElement('li');
  var imgElement = document.createElement('img');
  imgElement.src = data.catsImg;
  imgElement.width = 500;

  picElement.appendChild( imgElement );
  // console.log( picElement );

  ulElement.appendChild( nameElement );
  ulElement.appendChild( foodElement );
  ulElement.appendChild( picElement );
  console.log( ulElement );
  var list = document.getElementById('cats');
  console.log(list);
  list.appendChild(ulElement);
  

};

window.onload = app;
