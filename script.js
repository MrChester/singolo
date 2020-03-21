function prevDefault(event) {
  event.preventDefault();
}

function ready() {
  const TO_TOP = document.querySelector(".to-top");
  const NAV_LIST = document.querySelector(".nav__list");
  const NAV_LIST_LINKS = document.querySelectorAll(".nav-list__link");
  const PORTFOLIO_LIST = document.querySelector(".works-section__tags-list");

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
    console.log("It's woks");
    window.scrollTo(0, 0);
  }

  function switchActiveTab(event) {
    if (this === PORTFOLIO_LIST) {
      prevDefault(event);
    }
    let siblings = getSiblings(event.target.parentNode);
    let childs = [];
    siblings.forEach(function (elem) {
      elem.childNodes.forEach(function (node) {
        node.nodeType === 1 && childs.push(node);
      });
    });

    childs.forEach(function (child) {
      child.classList.remove("active");
    });
    console.log(event.currentTarget);
    event.target.classList.add("active");
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