var btn = document.querySelector(".contact-btn");
var popup = document.querySelector(".popup");
var close = document.querySelector(".cross-close");

btn.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("active");
});

close.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("active");
});
