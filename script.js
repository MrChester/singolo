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

SOCIALS_ITEM.addEventListener("click", () => window.location = this.href = "#", false);

function ready() {
  const TO_TOP = document.querySelector(".to-top");
  const NAV_LIST = document.querySelector(".nav__list");
  const NAV_LIST_LINKS = document.querySelectorAll(".nav-list__link");
  const PORTFOLIO_LIST_LINKS = document.querySelectorAll(".works-section__tags-link");
  const PORTFOLIO_LIST = document.querySelector(".works-section__tags-list");

  function showHeader() {
    const HEADER = document.querySelector(".header");
    if (window.pageYOffset > 95) {
      HEADER.classList.add("header_fixed");
    } else {
      HEADER.classList.remove("header_fixed");
    }
  }

  function offActive(){
    NAV_LIST_LINKS.forEach((el) => {
      el.classList.remove("active");
    });
    PORTFOLIO_LIST.forEach((el) => {
      el.classList.remove("active");
    });
  }

  function onSwitching(event) {
    event.target.classList.add("active")
    console.log(NAV_LIST_LINKS);
  }

  function onScrollTabs() {
    const CUR_POS = window.scrollY;
    const SECTIONS = document.querySelectorAll(".main>section");

    SECTIONS.forEach((el) => {
      if (el.offsetTop <= CUR_POS && (el.offsetTop + el.offsetHeight) > CUR_POS) {
        NAV_LIST_LINKS.forEach((a) => {
          a.classList.remove("active");
          if (el.getAttribute("id") === a.getAttribute("href").substring(1)) {
            a.classList.add("active");
          }
        });
      }
    });
  }

  function showToTop() {
    if (window.pageYOffset > 350) {
      TO_TOP.classList.add("to-top--show");
    } else {
      TO_TOP.classList.remove("to-top--show");
    }
  }

  function toTopScroll() {
    console.log("It's woks");
    window.scrollTo(0, 0);
  }

  document.addEventListener("scroll", showHeader, false);
  document.addEventListener("scroll", onScrollTabs, false);
  document.addEventListener("scroll", showToTop, false);
  TO_TOP.addEventListener("click", toTopScroll, false);
  NAV_LIST.addEventListener("click", onSwitching, false);
  PORTFOLIO_LIST.addEventListener("click", onSwitching, false);
}

document.addEventListener("DOMContentLoaded", ready);