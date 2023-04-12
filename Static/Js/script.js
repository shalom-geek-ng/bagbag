let valueDisplays = document.querySelectorAll(".num");
let interval = 2000;

valueDisplays.forEach((valueDisplays) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplays.getAttribute("data-val"));
  let duration = Math.floor(interval/endValue);
  let counter = setInterval(function(){
    startValue += 10;
    valueDisplays.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
      setTimeout(updateCounter, 40)
    }
    }, duration);
});

// Cart


  let cartCount = 0; // initialize the cart count to zero
  let selectedObject = ""; // initialize the selected object to empty

  // add event listeners to all "ADD TO CART" buttons
  const addToCartButtons = document.querySelectorAll(".boxed-bottom-btn");
  addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
      cartCount++; // increment the cart count
      selectedObject = button.parentNode.parentNode.querySelector(".boxed-bottom-text").textContent.trim(); // get the selected object text

      // update the cart count and selected object text
      const cartCountElem = document.querySelector(".cart-circle");
      cartCountElem.textContent = cartCount;
      const selectedObjectElem = document.querySelector("#selected-object");
      selectedObjectElem.textContent = selectedObject;
    });
  });

// Search
  const searchInput = document.querySelector('input[type="search"]');
  const boxes = document.querySelectorAll('.box');
  
  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    boxes.forEach(box => {
      const title = box.querySelector('.boxed-bottom-text p').textContent.toLowerCase();
      
      if (title.includes(searchTerm)) {
        box.style.display = 'block';
      } else {
        box.style.display = 'none';
        
      }
    });
  });
  


