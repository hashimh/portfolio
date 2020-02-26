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
