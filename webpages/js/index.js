// FUNCTIONS TO CHECK IF AN ELEMENT IS IN VIEW
function checkVisible(el) {
  const scroll = window.scrollY || window.pageYOffset;
  const boundsTop = el.getBoundingClientRect().top + scroll;

  const viewport = {
    top: scroll + 100,
    bottom: scroll + window.innerHeight
  };

  const bounds = {
    top: boundsTop,
    bottom: boundsTop + el.clientHeight
  };

  return (
    (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom) ||
    (bounds.top <= viewport.bottom && bounds.top >= viewport.top)
  );
}

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

  let home = document.getElementById("home-div-id");
  let home2 = document.getElementById("home-2-div");
  let work = document.getElementById("work-div");
  if (checkVisible(home) == true) {
    console.log("home");
  } else if (checkVisible(home2) == true) {
    console.log("home");
    6;
  } else if (this.checkVisible(work) == true) {
    console.log("work");
  } else {
    console.log("fuck");
  }
};

// function to animate the 2nd paragraph of home.html, when it comes into view
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

// Function to handle scroll down events
function scrollDown(id) {
  let div = document.getElementById(id);
  div.scrollIntoView({ behavior: "smooth", block: "start" });
}
