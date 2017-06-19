var list = document.getElementsByClassName('cat');
console.log(list);

var app = function () {
  var ulElement = document.createElement('ul');
  ulElement.classList.add('cat');
  // console.log( ulElement );

  var nameElement = document.createElement('li');
  nameElement.innerText = "name: Gato";
  // console.log( nameElement );

  var foodElement = document.createElement('li');
  foodElement.innerText = "Favorite Food: Tuna";
  // console.log( foodElement );

  var picElement = document.createElement('li');
  var imgEleement = document.createElement('img');

  picElement.appendChild( imgEleement );
  // console.log( picElement );

  ulElement.appendChild( nameElement );
  ulElement.appendChild( foodElement );
  ulElement.appendChild( picElement );
  console.log( ulElement );
};

window.onload = app;

  // <ul class="cat">
  //     <li>Name: Boba</li>
  //     <li>Favourite food: Sock fluff</li>
  //     <li><img width="500" src="http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"></li>
  //   </ul>