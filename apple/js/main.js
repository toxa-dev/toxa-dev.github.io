let navIcon = document.querySelector(".nav-icon");
let expand = document.querySelector(".nav-expand");
let expandLi = document.querySelectorAll(".nav-expand li");
let navBar = document.querySelector(".nav-bar");

navIcon.addEventListener("click", function(e) {
  navIcon.classList.toggle("active");
  expand.classList.toggle("expand-active");

  for (let i = 0; i < expandLi.length; i++) {
    if (expandLi[i].style.opacity == 0) {
      expandLi[i].style.opacity = 1;
    } else {
      expandLi[i].style.opacity = 0;
    }
  }

  if (navBar.style.cssText == "height: 100vh;") {
    navBar.style.cssText = "height: 44px;";
  } else {
    navBar.style.cssText = "height: 100vh;";
  }
});
