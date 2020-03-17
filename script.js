const ANCHOR = document.getElementsByTagName("a"),
  ANCHOR_LENGTH = ANCHOR.length,
  SOCIALS_ITEM = document.querySelector(".socials__item");

function prevDefault(event) {
  event.preventDefault();
}

(function anchorPrevDefault() {
  for (let i = 0; i < ANCHOR_LENGTH; i++) {
    ANCHOR[i].addEventListener("click", prevDefault, false);
  }
})()

SOCIALS_ITEM.addEventListener("click", () => window.location = this.href="#", false);

function ready(){
  const TO_TOP = document.querySelector(".to-top");

  function showHeader() {
    const HEADER = document.querySelector(".header");
    if (window.pageYOffset > 95) {
      HEADER.classList.add("header_fixed");
    } else {
      HEADER.classList.remove("header_fixed");
    }
  }

  function showToTop() {
    if (window.pageYOffset > 350) {
      TO_TOP.classList.add("to-top--show");
    } else {
      TO_TOP.classList.remove("to-top--show");
    }
  }

  function toTopScroll(){
    console.log("It's woks");
    window.scrollTo(0, 0);
  }

  document.addEventListener("scroll", showHeader, false);
  document.addEventListener("scroll", showToTop, false);
  TO_TOP.addEventListener("click", toTopScroll, false);
}

document.addEventListener("DOMContentLoaded", ready);
