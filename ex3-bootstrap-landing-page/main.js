document.addEventListener("scroll", function () {
  const navStartScroll = document.getElementById("navbar");
  if (window.scrollY > 0) {
    navStartScroll.classList.add("scrolled");
  } else {
    navStartScroll.classList.remove("scrolled");
  }
});
