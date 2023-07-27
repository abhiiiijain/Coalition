const navbar = document.querySelector(".navbar");
const historySection = document.querySelector('.history');
const teamSection = document.querySelector('.team');

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Check if history section is in the viewport and update the link color
  if (isInViewport(historySection)) {
    navbar.querySelector('a[href="#history"]').classList.add('active');
  } else {
    navbar.querySelector('a[href="#history"]').classList.remove('active');
  }

  // Check if team section is in the viewport and update the link color
  if (isInViewport(teamSection)) {
    navbar.querySelector('a[href="#team"]').classList.add('active');
  } else {
    navbar.querySelector('a[href="#team"]').classList.remove('active');
  }
});