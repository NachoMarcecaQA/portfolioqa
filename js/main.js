//Sticky header
window.addEventListener("scroll", function () {
  const header = document.querySelector("#header");
  const hero = document.querySelector("#home");
  let triggerHeight = hero.offsetHeight - 170;

  if (window.scrollY > triggerHeight) {
    header.classList.add("header-sticky");
  } else {
    header.classList.remove("header-sticky");
  }
});

//AOS animations settings
AOS.init({
  once: true,
});

//toogle menu
const navBtn = document.getElementById("nav-btn");
const navList = document.querySelector(".nav-list");

navBtn.addEventListener("click", () => {
  navList.classList.toggle("active");
});