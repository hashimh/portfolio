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

  // let home = document.getElementById("home-div-id");
  // let home2 = document.getElementById("home-2-div");
  // let work = document.getElementById("work-div");
  // if (checkVisible(home) == true) {
  //   console.log("home");
  // } else if (checkVisible(home2) == true) {
  //   console.log("home");
  //   6;
  // } else if (this.checkVisible(work) == true) {
  //   console.log("work");
  // } else {
  //   console.log("fuck");
  // }
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

// Modal code
function emailValidate(email) {
  // validate email
  let emailIn = document.getElementById("userEmail");

  if (isEmail(email) == true) {
    // If good change background to green, remove possible error message
    emailIn.style.border = "2px solid rgb(119, 221, 119)";
    emailIn.style.backgroundColor = "rgb(119, 221, 119)";
  } else if (emailIn.value == "") {
    emailIn.style.border = "2px solid #ffe1a1";
    emailIn.style.backgroundColor = "#ffe1a1";
  } else {
    emailIn.style.border = "2px solid rgb(255, 105, 97)";
    emailIn.style.backgroundColor = "rgb(255, 105, 97)";
  }
}

function nameValidate(name) {
  // Ensure names have a value, and don't contain numbers
  let nameIn = document.getElementById("userName");

  if (isName(name) == true) {
    nameIn.style.border = "2px solid rgb(119, 221, 119)";
    nameIn.style.backgroundColor = "rgb(119, 221, 119)";
  } else if (nameIn.value == "") {
    nameIn.style.border = "2px solid #ffe1a1";
    nameIn.style.backgroundColor = "#ffe1a1";
  } else {
    // Name does not match the regex - contains numbers etc
    nameIn.style.border = "2px solid rgb(255, 105, 97)";
    nameIn.style.backgroundColor = "rgb(255, 105, 97)";
  }
}

function inputValidate(subject, targetLength, form) {
  let subjectIn = document.getElementById(form);
  if (subject.length > targetLength) {
    subjectIn.style.border = "2px solid rgb(119, 221, 119)";
    subjectIn.style.backgroundColor = "rgb(119, 221, 119)";
  } else if (subject.length == 0) {
    subjectIn.style.border = "2px solid #ffe1a1";
    subjectIn.style.backgroundColor = "#ffe1a1";
  } else {
    // Subject length is too short
    subjectIn.style.border = "2px solid rgb(255, 105, 97)";
    subjectIn.style.backgroundColor = "rgb(255, 105, 97)";
  }
}

function isEmail(email) {
  let regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!regex.test(email)) {
    return false;
  } else {
    return true;
  }
}

function isName(name) {
  let regex = /^[a-zA-Z ]{2,30}$/;
  if (!regex.test(name)) {
    return false;
  } else {
    return true;
  }
}

let tooltip = document.getElementsByClassName("tooltip");

window.onmousemove = function(e) {
  for (let i = 0; i < tooltip.length; i++) {
    let x = e.clientX,
      y = e.clientY;
    tooltip[i].style.top = y + 20 + "px";
    tooltip[i].style.left = x + 20 + "px";
  }
};
