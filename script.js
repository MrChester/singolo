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
  function showHeader() {
    const HEADER = document.querySelector(".header");
    if (window.pageYOffset > 95) {
      HEADER.classList.add("header_fixed");
    } else {
      HEADER.classList.remove("header_fixed");
    }
  }

  document.addEventListener("scroll", showHeader, false);
}

document.addEventListener("DOMContentLoaded", ready);
