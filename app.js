//When index.html loads on the page,
//change the greeting to Hello, World!
window.onload = function (){
  var greeting = document.getElementById('greeting');
  greeting.innerText = "Hello, World!";

//Create a variable that stores all list elements on the doc in a array.
//Loop through this array, and change the background of all list items to yellow.
  var listItems = document.getElementsByTagName('li');
  for(var i = 0; i < listItems.length; i++){
  listItems[i].style.background = 'yellow';

//Inside same array, add an event handler to the list item that will fire on click.
//When any list item is clicked, run a function that removes all list items class names.
//Immediately after removing class names; keep clicked list item selected.
  listItems[i].addEventListener('click', function(){

      for(var j = 0; j < listItems.length; j++){
        listItems[j].className = '';
      }
      this.className = 'selected';

      //Changes top image to corresponding image of the list item clicked
      var food = this.innerText;
      console.log(food);
      switch (food) {
        case 'milk':
          newImg.src ='images/milk.jpeg';
          break;
        case 'honey':
          newImg.src ='images/honey.jpeg';
          break;
        case 'water':
          newImg.src ='images/water.jpeg';
          break;
        case 'wine':
          newImg.src ='images/wine.jpeg';
          break;
        case 'beer':
          newImg.src ='images/beer.jpeg';
          break;
        default: return false;
      };


  });
  }

//xCreate an image element, set its source to this url,
//take the greeting element and append the new image to it.
  var newImg = document.createElement('img');
  newImg.src = "";
  greeting.appendChild(newImg);

//Add an event listener that removes itself on mouseover.
//You must go to parent node then back to child to remove this element.
  var ghost = document.getElementById('ghosting');
  ghost.addEventListener('mouseover', function(){
    this.parentNode.removeChild(this);
  });

//Add an event listener that doubles the size of the resize id when the mouse is inside the div.
//Add another event listener that halves the size of the id when the mouse is outside the div.
  var resize = document.getElementById('resize');
  resize.addEventListener('mouseenter', function(){
    this.style.width = '400px';
  });
  resize.addEventListener('mouseleave', function(){
    this.style.width = '200px';
  });

//When reset button is clicked removes all selected class names then replaces newImg with panic img
  var reset = document.getElementById('reset');
  reset.addEventListener('click', function(){
    for(var i = 0; i < listItems.length; i++){
      listItems[i].className = '';
    }
    newImg.src='images/panic.jpeg';
  });

//Attaches an event handler to the window that will fire every time a key is pressed.
//Check for the key code to match the numbers 0-9 and log if true.
  window.addEventListener('keypress', function(event){
    if(event.keyCode >= 48 && event.keyCode <= 57){
      console.log('I HATE NUMBERZZZ!');
    }
  });

};
