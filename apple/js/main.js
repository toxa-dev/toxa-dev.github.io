let navIcon = document.querySelector(".nav-icon");
let expand = document.querySelector(".nav-expand");
let expandLi = document.querySelectorAll(".nav-expand li");
let navBar = document.querySelector(".nav-bar");

navIcon.addEventListener("click", function(e) {
  if (
    navIcon.classList.contains("active-two") &&
    navIcon.classList.contains("active-three")
  ) {
    navIcon.classList.remove("active-two");
    navIcon.classList.remove("active-three");
  }

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

  if (navIcon.classList.contains("active-two")) {
    navIcon.classList.add("active-three");
    setTimeout(function() {
      navIcon.classList.add("initial");
    }, 200);
  } else {
    navIcon.classList.remove("initial");
    setTimeout(function() {
      navIcon.classList.toggle("active-two");
    }, 200);
  }
});
