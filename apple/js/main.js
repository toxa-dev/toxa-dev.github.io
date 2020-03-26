let navIcon = document.getElementById("nav-icon");
let menuBigDevices = document.getElementById("menu-big-devices");
let menuBigDevicesLis = document.querySelectorAll("#menu-big-devices li");
let menuItem1 = document.getElementById("logo-apple");
let menuItem2 = document.getElementById("search");
let menuItem3 = document.getElementById("bag");
let menuContent = document.querySelector(".menu-content");

navIcon.addEventListener("click", function(e) {
  menuContent.classList.toggle("full-height");
  navIcon.classList.toggle("open");

  menuBigDevices.classList.toggle("menu-big-devices");
  menuBigDevices.classList.toggle("full-screen");

  for (let i = 0; i < menuBigDevicesLis.length; i++) {
    menuBigDevicesLis[i].classList.toggle("asdf");
  }

  menuItem1.style.setProperty("display", "none");
  menuItem2.style.setProperty("display", "none");
  menuItem3.style.setProperty("display", "none");
});
