function debounce(func, wait = 20, immediate = true) {
  let timeout;

  // This is the function that is actually executed when
  // the DOM event is triggered.
  return function executedFunction() {
    const context = this;
    const args = arguments;

    // The function to be called after debounce time has elapsed
    const later = function () {

      // null timeout to indicate the debounce ended
      timeout = null;

      // Call function now if you did not in the beginning
      if (!immediate) func.apply(context, args);
    };

    // Determine if you should call the function
    // on the leading or trail end
    const callNow = immediate && !timeout;

    // This will reset the waiting every function execution.
    clearTimeout(timeout);

    // Restart the debounce waiting period - returns true
    timeout = setTimeout(later, wait);

    // Call immediately if you're doing a leading end execution
    if (callNow) {
      func.apply(context, args);
    }
  };
}
function getOffset(el) {
  var _x = 0;
  var _y = 0;
  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    _x += el.offsetLeft - el.scrollLeft;
    _y += el.offsetTop - el.scrollTop;
    el = el.offsetParent;
  }
  return _y;
}

let image = document.getElementById('image1')
let scrolling = debounce( function(){ 
images = document.getElementsByTagName("img")
Array.from(images).forEach( function(image) {
  let windowHeight = (window.innerHeight)/2;
  if (image.y < windowHeight) {
    image.classList.add("active")
  }
  if (image.y < 0) {
    image.classList.remove("active")
  }
}
)}, 20 );
window.addEventListener('scroll', scrolling);

// console.log(window.pageYOffset)