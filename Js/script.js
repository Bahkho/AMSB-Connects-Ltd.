var myNav = document.getElementById("nav");
var amsb = document.getElementById("amsb");
var nav_link = document.getElementById(".nav_link");

window.onscroll = function () {
  "use strict";
  if (
    document.body.scrollTop >= 100 ||
    document.documentElement.scrollTop >= 100
  ) {
    myNav.classList.add("nav-colored");
    amsb.style.color = "white";

    myNav.classList.remove("nav-transparent");
  } else {
    myNav.classList.add("nav-transparent");
    myNav.classList.remove("nav-colored");
    amsb.style.color = "#ffc107";
  }
};

const more = document.querySelector(".more");
const moreCont = document.querySelector(".moreContent");

more.addEventListener("click", () => {
  if (moreCont.style.display === "none") {
    moreCont.style.display = "block";
  } else {
    moreCont.style.display = "none";
  }
});

// $(".nav-item").click(function () {
//   $(".navbar-collapse").collapse("hide");
// });

// $(".nav-link").click(function () {
//   "use strict";
//   // If the clicked element has the active class, remove the active class from EVERY .nav-link>.state element
//   if ($(this).hasClass("active")) {
//     $(".nav-link").removeClass("active");
//   }
//   // Else, the element doesn't have the active class, so we remove it from every element before applying it to the element that was clicked
//   else {
//     $(".nav-link").removeClass("active");
//     $(this).addClass("active");
//   }
// });

// $(".nav-link").on("click", function () {
//   $(".navbar-collapse").hide();
//   $(".nav-link").removeClass("active");
// });

// var link = document.querySelector(".nav-link");
// var main = document.querySelector(".navbar-collapse");

// link.addEventListener("click", () => {
//   if (main.style.display === "none") {
//     main.style.display = "inline-block";
//   } else {
//     main.style.display = "none";
//   }
// });
