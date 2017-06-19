var data = {
  catName: "Lucipurr",
  catsFood: "Dog's heart",
  catsImg: "https://img.wikinut.com/img/19cgiwd67cvbziym/jpeg/0/Satanic-Cat.jpeg"
}
var app = function () {
  addCatToList( data.catName, data.catsFood, data.catsImg ); 
};

var addCatToList = function( catName, catsFood, catsImg ) {
  var ulElement = createUlclass( 'cat' );
  var nameElement = createLiElement( 'Name', catName );
  var foodElement = createLiElement( 'Favourite Food', catsFood );
  var imgElement = createLiImgElement( catsImg, 500 );
  appendElements( ulElement, [nameElement, foodElement, imgElement] );
};

var createUlclass = function( className ) {
  var ulElement = document.createElement( 'ul' );
  ulElement.classList.add( className );
  return ulElement;
};

var createLiElement = function ( header, param ) {
  var liElement = document.createElement( 'li' );
  liElement.innerText = header + ": " + param;
  return liElement;
};

var createLiImgElement = function ( url, width ) {
  var picElement = document.createElement('li');
  var imgElement = document.createElement('img');
  imgElement.src = url;
  imgElement.width = width;
  picElement.appendChild( imgElement );

  return picElement;
}

var appendElements = function( catClass, liNodes ) {
  for( var node of liNodes){
    catClass.appendChild( node );
  }
  var list = document.getElementById('cats');
  list.appendChild( catClass );
}

window.onload = app;






// ----------------READY AT FIRST----------------
  // var data = {
  //   catName: "Lucipurr",
  //   catsFood: "Dog's heart",
  //   catsImg: "https://img.wikinut.com/img/19cgiwd67cvbziym/jpeg/0/Satanic-Cat.jpeg"
  // }
  // var ulElement = document.createElement('ul');
  // ulElement.classList.add('cat');
  // // console.log( ulElement );

  // var nameElement = document.createElement('li');
  // nameElement.innerText = "Name: " + data.catName;
  // // console.log( nameElement );

  // var foodElement = document.createElement('li');
  // foodElement.innerText = "Favorite Food: " +  data.catsFood;
  // // console.log( foodElement );

  // var picElement = document.createElement('li');
  // var imgElement = document.createElement('img');
  // imgElement.src = data.catsImg;
  // imgElement.width = 500;

  // picElement.appendChild( imgElement );
  // // console.log( picElement );

  // ulElement.appendChild( nameElement );
  // ulElement.appendChild( foodElement );
  // ulElement.appendChild( picElement );
  // console.log( ulElement );
  // var list = document.getElementById('cats');
  // console.log(list);
  // list.appendChild(ulElement);
