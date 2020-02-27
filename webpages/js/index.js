window.onbeforeunload = function() {
  window.scrollTo(0, 0);
};

// navigation bar scroll - add background colour
let navbar = document.getElementById("navbar");
window.onscroll = function() {
  "use strict";
  if (
    document.body.scrollTop >= 100 ||
    document.documentElement.scrollTop >= 100
  ) {
    navbar.classList.add("navbar-colour");
    navbar.classList.remove("navbar-clear");
  } else {
    navbar.classList.add("navbar-clear");
    navbar.classList.remove("navbar-colour");
  }
};

let animateHTML = function() {
  let elem, windowHeight;
  let init = function() {
    elem = document.getElementsByClassName("home-2-hello");
    windowHeight = window.innerHeight;
    _addEventHandlers();
  };

  let _addEventHandlers = function() {
    window.addEventListener("scroll", _checkPosition);
  };
  let _checkPosition = function() {
    for (var i = 0; i < elem.length; i++) {
      var posFromTop = elem[i].getBoundingClientRect().top;
      if (posFromTop - windowHeight <= -500) {
        elem[i].className = elem[i].className.replace(
          "para-hidden",
          "para-fade-in"
        );
      }
    }
  };
  return {
    init: init
  };
};

animateHTML().init();
