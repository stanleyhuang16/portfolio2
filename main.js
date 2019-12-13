function scrollToTop() {
  document.querySelector('body').scrollIntoView();
}

function scrollAbout() {
  document.getElementById('about').scrollIntoView();
}

function scrollProjects() {
  document.getElementById('projects').scrollIntoView();
}

function scrollContact() {
  document.getElementById('contact').scrollIntoView();
}

// When user scrolls down 100px from top of document, show arrow icon
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.querySelector('.fa-angle-up').style.visibility = 'visible';
  } else {
	document.querySelector('.fa-angle-up').style.visibility = 'hidden';
  }
}