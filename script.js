function prevDefault(event) {
  event.preventDefault();
}

function ready() {
  const TO_TOP = document.querySelector(".to-top");
  const NAV_LIST = document.querySelector(".nav__list");
  const NAV_LIST_LINKS = document.querySelectorAll(".nav-list__link");
  const PORTFOLIO_LIST = document.querySelector(".works-section__tags-list");
  const PORTFOLIO_LIST_LINKS = document.querySelectorAll(".works-section__tags-link");
  const PORTFOLIO_IMAGES = document.querySelectorAll(".works-gallery__item");
  let clicked = false;

  function showHeader() {
    const HEADER = document.querySelector(".header");
    if (window.pageYOffset > 95) {
      HEADER.classList.add("header_fixed");
    } else {
      HEADER.classList.remove("header_fixed");
    }
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
    window.scrollTo(0, 0);
  }

  function switchActiveTab(event) {

    if (this === PORTFOLIO_LIST) {
      prevDefault(event);
      if (!clicked && !event.target.classList.contains("disabled") || !event.target.classList.contains("disabled")) {
        event.target.classList.add("disabled");
        showRandomImages();
        clicked = true;
      } else {
        clicked = false;
      }

    }

    let siblings = getSiblings(event.target.parentNode);
    let childs = [];
    siblings.forEach(function (elem) {
      elem.childNodes.forEach(function (node) {
        node.nodeType === 1 && childs.push(node);
      });
    });

    childs.forEach(function (child) {
      child.classList.remove("active", "disabled");
    });



    event.target.classList.add("active");
  }

  function showRandomImages() {
    const mixRand = (a, b) => Math.random() - 0.5;
    let arrImg = Array.from(PORTFOLIO_IMAGES),
      arrImgSrcMix = arrImg.map(e => e.classList[1]).sort(mixRand);
    arrImg.map(function (e, i) {
      e.classList.remove(e.classList[1]);
      e.classList.add(arrImgSrcMix[i]);
    });
  }

  function getSiblings(elem) {
    let siblings = [];
    let sibling = elem;

    while (sibling.previousSibling) {
      sibling = sibling.previousSibling;
      sibling.nodeType === 1 && siblings.push(sibling);
    }

    sibling = elem;
    while (sibling.nextSibling) {
      sibling = sibling.nextSibling;
      sibling.nodeType === 1 && siblings.push(sibling);
    }

    return siblings;
  }

  document.addEventListener("scroll", showHeader, false);
  document.addEventListener("scroll", onScrollTabs, false);
  document.addEventListener("scroll", showToTop, false);
  TO_TOP.addEventListener("click", toTopScroll, false);
  NAV_LIST.addEventListener("click", switchActiveTab, false);
  PORTFOLIO_LIST.addEventListener("click", switchActiveTab, false);
}

document.addEventListener("DOMContentLoaded", ready);