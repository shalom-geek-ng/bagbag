let valueDisplays = document.querySelectorAll(".num");
let interval = 12000;

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