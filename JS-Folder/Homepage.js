
//Lihini Start
//searchBar() shows the search results when input is detected
function searchBar() {
  var searchInput = document.getElementById('search');
    var x = document.getElementById("searchDrop");
    if (searchInput.value!=='') {
      x.style.display = "block";
    } else {
      x.style.display = "none"; //if no input it hides it
    }
  }

  //menuBar shows the side menu when clicked and also covers the backgroud with a 
  //semitrasnparent rectnagle
  function menuBar(){
    var x = document.getElementById("menuDrop");
    var background = document.getElementById("bg");
    if (x.style.display === "none") {
      background.style.display = "block";
      x.style.display = "block";
    } else {
      background.style.display ="none"; //hides when clicked again
      x.style.display = "none";
    }
  }

  //Description drop down tab on the product page. when clicked show product summary
  function descripDrop(){
    var x = document.getElementById("descripText");
    var arrow = document.querySelector('.descrip-arrow');
    if (x.style.display === "none") {
      x.style.display = "block";
      arrow.classList.toggle('rotate'); //arrow roates 180 
    } else {
      x.style.display = "none";
      arrow.classList.remove('rotate'); //arrow returns to normal

    }
  }

  //links to the homepage
  document.getElementById("linkHome").onclick = function () {
    location.href = "Homepage.html";
}

//openCart shows the pop-cart when clicked and also covers the backgroud with a 
  //semitrasnparent rectnagle
function openCart() {
  var background = document.getElementById("bg");
  var div = document.getElementById("sideBar");
  
  if (div.style.display === "none") {
    background.style.display = "block";
    div.style.display = "block";
    document.body.style.overflow = "hidden"; // Hide the scrollbar
  } else {
    background.style.display = "none"; //hides when clicked again
    div.style.display = "none";
    document.body.style.overflow = "auto"; // Show the scrollbar
  }
}

//When add to cart button is clicked the cart and notification gets updates
function addedCart(){
  const addedToCart = document.getElementById('addCart');
  const notif = document.getElementById('cartNotif');
  const cartItem =document.getElementById('popCart');
  const emptyCart = document.getElementById('emptyCart');

    notif.style.display = "block";
    cartItem.style.display = "block";
    emptyCart.style.display="none";
  
  addedToCart.innerText = "Added to Cart";
  addedToCart.style.backgroundColor="#F9C290"
  addedToCart.style.color="black"
  setTimeout(()=>{
    addedToCart.innerText ="Add to Cart"
    addedToCart.style.backgroundColor="#A1483D"
    addedToCart.style.color="white"
}, 2000);
}

function rightScroll() {
  const left = document.querySelector(".scroll-images");
  left.scrollBy(200, 0);
}
function leftScroll() {
  const right = document.querySelector(".scroll-images");
  right.scrollBy(-200, 0);
}



//lihini end