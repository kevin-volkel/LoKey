const navBar = document.getElementById("nav-button");

const navLinks = document.getElementById("navbar");

const burger = document.getElementById("bars");

let menuOpen = false;

function navButton() {
  if (!menuOpen) {
    navBar.classList.add("open");
    menuOpen = true;
    navLinks.classList.add("showNav");
  } else {
    navBar.classList.remove("open");
    menuOpen = false;
    navLinks.classList.remove("showNav");
  }
}
