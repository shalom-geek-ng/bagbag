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
  


// Get the cart icon element and the cart contained button element
const cartIcon = document.querySelector('#cart-icon');
const cartContained = document.querySelector('.cart-contained');

// Initialize the cart count to 0
let cartCount = 0;

// Add click event listeners to all the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.boxed-bottom-btn');
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Increase the cart count
    cartCount++;
    
    // Update the cart icon with the new count
    cartContained.innerText = cartCount;
    
    // Add a visual indication to the cart icon
    cartIcon.classList.add('faa-ring', 'animated');
    setTimeout(() => {
      cartIcon.classList.remove('faa-ring', 'animated');
    }, 1000);
  });
});

