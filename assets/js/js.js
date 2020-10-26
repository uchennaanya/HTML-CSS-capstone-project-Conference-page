
window.onscroll = function() {fixedTop()};

var header = document.getElementById("myHeader");
var stickTop = header.offsetTop;

function fixedTop() {
  if (window.pageYOffset > stickTop) {
    header.classList.add("stickTop");
  } else {
    header.classList.remove("stickTop");
  }
}
