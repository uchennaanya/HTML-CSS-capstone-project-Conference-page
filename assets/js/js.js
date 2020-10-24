
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

var header = document.getElementById("myHeader");
var btns = header.getElementsByClassName("links");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}