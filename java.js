// mobile menu
const open_menu = document.getElementById("open-menu");
const close_menu = document.getElementById("close-menu");
const mobile_menu = document.querySelector(".mobile-menu");
let isMobileMenuOpen = 0;

console.log(open_menu, close_menu, mobile_menu);

// open-------------------------
open_menu.addEventListener("click", () => {
  mobile_menu.style.top = "0";
  mobile_menu.style.left = "0";
  open_menu.style.display = "none";
  close_menu.style.display = "flex";
});
// close--------------------
close_menu.addEventListener("click", () => {
  mobile_menu.style.left = "-100%";
  mobile_menu.style.top = "-100%";
  close_menu.style.display = "none";
  open_menu.style.display = "flex";
});
