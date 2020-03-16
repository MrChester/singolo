const ANCHOR = document.getElementsByTagName("a"),
  ANCHOR_LENGTH = ANCHOR.length,
  SOCIALS_ITEM = document.querySelector(".socials__item");

window.prevAction = false;

function prevDefault(event) {
  if (window.prevAction) {
    event.preventDefault();
  }
}

(function anchorPrevDefault() {
  for (let i = 0; i < ANCHOR_LENGTH; i++) {
    ANCHOR[i].addEventListener("click", prevDefault, false);
  }
})()

SOCIALS_ITEM.addEventListener("click", () => window.prevAction = true, false);

window.onscroll = function showHeader() {
  const HEADER = document.querySelector(".header");
  if(window.pageYOffset > 95){
    HEADER.classList.add("header_fixed");
  }
  else{
    HEADER.classList.remove("header_fixed");
  }
}