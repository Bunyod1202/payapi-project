var elModalOpenButton = document.querySelector(".btn-meny");
var elModalcloseButton = document.querySelector(".close");
var elModalOpenlink = document.querySelector(".mobile-header");


elModalOpenButton.addEventListener("click", function () {
  elModalOpenlink.classList.add("nav--active");
});
elModalcloseButton.addEventListener("click", function () {
  elModalOpenlink.classList.remove("nav--active");
});
