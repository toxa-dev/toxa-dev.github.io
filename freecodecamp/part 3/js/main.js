let navIcon = document.querySelector(".nav-icon");
let bodyHeader = document.querySelector("#header");
let htmlElement = document.querySelector("html");
let bodyElement = document.querySelector("body");
let navLinks = document.querySelectorAll(".nav-link");

//Manipulation with menu for a small devices
navIcon.addEventListener("click", () => {
  //Remove or add scrollbar-thumb but keep scrollbar-track
  htmlElement.classList.toggle("no-scroll-1");
  htmlElement.classList.toggle("no-scroll-2");
  bodyElement.classList.toggle("no-scroll-1");

  bodyHeader.classList.toggle("height-100vh");
  //Adjust the transitions for the bars
  navIcon.classList.toggle("transition");
});

navLinks.forEach((item) => {
  item.addEventListener("click", () => {
    if (bodyHeader.classList.contains("height-100vh")) {
      //Add scrollbar-thumb if menu item clicked since it will take the user to the corresponding section
      htmlElement.classList.toggle("no-scroll-1");
      htmlElement.classList.toggle("no-scroll-2");
      bodyElement.classList.toggle("no-scroll-1");

      bodyHeader.classList.toggle("height-100vh");
      //Adjust the transitions for the bars
      navIcon.classList.toggle("transition");
    }
  });
});
