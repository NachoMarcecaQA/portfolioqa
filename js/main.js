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