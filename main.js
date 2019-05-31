// When user scrolls down 100px from top of document, show arrow
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.querySelector(".fa-angle-up").style.visibility = "visible";
  } else {
    document.querySelector(".fa-angle-up").style.visibility = "hidden";
  }
}

// When user clicks on arrow, scroll to top of document
function topFunction() {
  document.documentElement.scrollTop = 0;
}
