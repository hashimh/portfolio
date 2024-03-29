// ANIMATE SECOND PARA FOR DESKTOP/TABLET ONLY
window.addEventListener("load", (event) => {
  if (window.innerWidth < 600) {
    let para2 = document.getElementById("para-2");
    para2.classList.remove("para-hidden");
  }
  if (window.innerWidth > 600) {
    animateHTML().init();
  }

  // check if device is tablet, remove colour changing section
  if (/ipad|tablet/.test(this.navigator.userAgent) == true) {
    console.log("tablet");
  }
});

// FUNCTIONS TO CHECK IF AN ELEMENT IS IN VIEW
function checkVisible(el) {
  const scroll = window.scrollY || window.pageYOffset;
  const boundsTop = el.getBoundingClientRect().top + scroll;

  const viewport = {
    top: scroll + 100,
    bottom: scroll + window.innerHeight,
  };

  const bounds = {
    top: boundsTop,
    bottom: boundsTop + el.clientHeight,
  };

  return (
    (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom) ||
    (bounds.top <= viewport.bottom && bounds.top >= viewport.top)
  );
}

// FUNCTION TO ALTER CLASSNAMES OF NAVBAR ELEMENTS FOR RESPONSIVENESS //
function navFunction() {
  console.log("entered navFunction");
  let y = document.getElementsByClassName("middle-animation");
  for (let i = 0; i < y.length; i++) {
    if (y[i].classList.contains("middle-animation")) {
      y[i].classList.add("no-animation");
    } else {
      y[i].classList.remove("no-animation");
    }
  }
  let x = document.getElementById("navbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

// FUNCTION WHEN COLOUR BOX IS CLICKED
let lightGlobal = "#ffe1a1";
function colorChange(col) {
  let darkest, dark, light, lightest;
  // make current color active
  let colors = document.getElementsByClassName("color-div");
  for (let i = 0; i < colors.length; i++) {
    colors[i].classList.remove("color-div-active");
  }
  document.getElementById(col).classList.add("color-div-active");

  // first, determine which color has been clicked and assign variables accordingly
  if (col == "color-orange") {
    dark = "#ed8a53";
    light = "#ffe1a1ef";
    lightest = "#fff4c7";
  } else if (col == "color-blue") {
    dark = "#759ba9";
    light = "#aeb6cfef";
    lightest = "#f3f5f5";
  } else if (col == "color-purple") {
    dark = "#8066B3";
    light = "#B19CD9ef";
    lightest = "#E9DEFF";
  } else if (col == "color-pink") {
    dark = "#D991A2";
    light = "#FFD1DCef";
    lightest = "#fdf0f2";
  }

  // now, get each element which needs background colour changed and change it, starting with dark -> light -> lightest
  let root = document.documentElement;

  // dark:
  document.getElementById("modal-cont").style.backgroundColor = dark;
  let ul = document.getElementsByClassName("lang-tags");
  for (let i = 0; i < ul.length; i++) {
    let li = ul[i].getElementsByTagName("li");
    for (let j = 0; j < li.length; j++) {
      li[j].style.backgroundColor = dark;
      li[j].style.border = "2px solid " + dark;
    }
  }
  root.style.setProperty("--dark-bg", dark);

  // light
  root.style.setProperty("--light-bg", light);
  // document.getElementsByClassName("navbar-clear")[0].style.backgroundColor =
  //   "transparent";
  let modalInputs = document.getElementsByClassName("modal-entry");
  for (let i = 0; i < modalInputs.length; i++) {
    modalInputs[i].style.backgroundColor = light;
    modalInputs[i].style.border = "2px solid " + light;
  }
  // send button differs from rest:
  document.getElementById("sendMessage").style.backgroundColor = dark;
  document.getElementById("sendMessage").style.border = "2px solid" + dark;

  // lightest
  document.body.style.backgroundColor = lightest;
  root.style.setProperty("--background-bg", lightest);

  lightGlobal = light;
}

// WHEN SCROLLED DOWN, CHANGE NAV BAR APPEARANCE
let navbar = document.getElementById("navbar");
window.onscroll = function () {
  "use strict";
  if (!/Mobi/.test(this.navigator.userAgent) == true) {
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
  } else {
    // console.log("mob");
    document.getElementById("colour-picker").style.display = "none";
  }
};

// SECOND PARAGRAPH VIEW ANIMATION
let animateHTML = function () {
  let elem, windowHeight;
  let init = function () {
    elem = document.getElementsByClassName("home-2-anim");
    windowHeight = window.innerHeight;
    _addEventHandlers();
  };

  let _addEventHandlers = function () {
    window.addEventListener("scroll", _checkPosition);
  };
  let _checkPosition = function () {
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
    init: init,
  };
};

// FUNCTION TO HANDLE DOWN ARROW SCROLL EVENT
function scrollDown(id) {
  let div = document.getElementById(id);
  div.scrollIntoView({ behavior: "smooth", block: "start" });
}

// MODAL FUNCTIONS
function emailValidate(email) {
  // validate email
  let emailIn = document.getElementById("userEmail");

  if (isEmail(email) == true) {
    // If good change background to green, remove possible error message
    emailIn.style.border = "2px solid rgb(119, 221, 119)";
    emailIn.style.backgroundColor = "rgb(119, 221, 119)";
  } else if (emailIn.value == "") {
    emailIn.style.border = "2px solid " + lightGlobal;
    emailIn.style.backgroundColor = lightGlobal;
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
    nameIn.style.border = "2px solid " + lightGlobal;
    nameIn.style.backgroundColor = lightGlobal;
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
    subjectIn.style.border = "2px solid " + lightGlobal;
    subjectIn.style.backgroundColor = lightGlobal;
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

window.onmousemove = function (e) {
  for (let i = 0; i < tooltip.length; i++) {
    let x = e.clientX,
      y = e.clientY;
    tooltip[i].style.top = y + 20 + "px";
    tooltip[i].style.left = x + 20 + "px";
  }
};

// HANDLE SEND BUTTON CLICK
async function sendBtnClicked() {
  let nameIn = document.getElementById("userName");
  let emailIn = document.getElementById("userEmail");
  let messageIn = document.getElementById("mailMessage");

  let errorMsg = document.getElementById("errorMsg");
  let errorDiv = document.getElementById("errorMsgDiv");

  if (isName(nameIn.value) !== true) {
    errorMsg.innerHTML = "please enter a valid name";
  } else {
    if (isEmail(emailIn.value) !== true) {
      errorMsg.innerHTML = "please enter a valid address";
    } else {
      if (messageIn.value.length < 10) {
        errorMsg.innerHTML = "please enter a valid message";
      } else {
        // ALL INPUTS HAVE BEEN VALIDATED, MESSAGE CAN NOW BE SENT
        errorMsg.innerHTML = "";
        const fetchOptions = {
          credentials: "same-origin",
          method: "POST",
        };

        let url =
          "/api/sendMail" +
          "?name=" +
          encodeURIComponent(nameIn.value) +
          "&email=" +
          encodeURIComponent(emailIn.value) +
          "&message=" +
          encodeURIComponent(messageIn.value);

        const response = await fetch(url, fetchOptions);
        if (!response.ok) {
          // handle the error
          console.log("Fetch response for /api/sendMail has failed.");
          return;
        } else {
          console.log("Successful /api/sendMail call.", response);
          nameIn.value = "";
          emailIn.value = "";
          messageIn.value = "";
          nameIn.style.backgroundColor = lightGlobal;
          emailIn.style.backgroundColor = lightGlobal;
          messageIn.style.backgroundColor = lightGlobal;
          nameIn.style.border = "2px solid " + lightGlobal;
          emailIn.style.border = "2px solid " + lightGlobal;
          messageIn.style.border = "2px solid " + lightGlobal;
        }
        errorMsg.innerHTML = "your message has been sent :)";

        setTimeout(function () {
          // Clear modal content and close modal
          errorMsg.innerHTML = "";
        }, 5000);
      }
    }
  }
}

// cheat day image switching
let curImg = 1;
let imgDiv = document.getElementById("img-div");
function prevImg() {
  if (curImg > 1) {
    curImg = curImg - 1;
  } else {
    curImg = 7;
  }
  imgDiv.style.backgroundImage =
    "url('../../images/cheat-day/" + curImg + ".png')";
}
function nextImg() {
  if (curImg == 7) {
    curImg = 1;
  } else {
    curImg += 1;
  }
  imgDiv.style.backgroundImage =
    "url('../../images/cheat-day/" + curImg + ".png')";
}
