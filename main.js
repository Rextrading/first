
const theme = document.querySelector("[data-theme]");
theme.addEventListener("click", function() {
  document.body.classList.toggle("dark-theme-colors");
  theme.querySelector("[data-theme-light]").classList.toggle("active");
  theme.querySelector("[data-theme-dark]").classList.toggle("active");
})

// menu displaying code

const menuContainer = document.querySelector("[data-menu-container]");
const overlay = document.querySelector("[data-overlay]");
const menuOpenBtn = document.querySelector("[data-menu-open-btn]");
const menuCloseBtn = document.querySelector("[data-menu-close-btn]");

const menuFunction = function(){
  menuContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

menuOpenBtn.addEventListener("click", menuFunction);
overlay.addEventListener("click", menuFunction);
menuCloseBtn.addEventListener("click", menuFunction);