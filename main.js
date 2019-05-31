// When user scrolls down 100px from top of document, show button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.querySelector(".fa-angle-up").style.display = "block";
  } else {
    document.querySelector(".fa-angle-up").style.display = "none";
  }
}

// When user clicks on button, scroll to top of document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
