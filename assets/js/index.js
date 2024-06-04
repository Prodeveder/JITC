const mobileNavbar = document.querySelector(".mobile__navbar__wrapper");
const OpenMenu = document.querySelector(".menu");
const CloseMenu = document.querySelector(".close");

OpenMenu.addEventListener("click", () => {
  mobileNavbar.style.display = "flex";
});

CloseMenu.addEventListener("click", () => {
  mobileNavbar.style.display = "none";
});

const headerContent = document.querySelectorAll(".header__container");
const active = document.querySelectorAll('.__active');


console.log(headerContent);

const clearHeader = () => {
  headerContent.forEach((Element) => {
    Element.style.display = "none";
    Element.classList.remove('active')
  });

  active.forEach((Element) => {
    Element.classList.remove('active')
  });
};

headerContent[0].style.display = "block";

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let headerIndex = 0;

const runSlider = () => {
  setInterval(nextSlide, 10000);
};

const nextSlide = () => {
  clearHeader();
  clearInterval();
  if (headerIndex > 1) {
    headerIndex = 0;
  } else {
    headerIndex += 1;
  }
  headerContent[headerIndex].style.display = "block";
  active[headerIndex].classList.add('active')
  headerContent[headerIndex].classList.add('active')
};

const prevSlide = () => {
  clearHeader();
  clearInterval();
  if (headerIndex == 0) {
    headerIndex = 2;
  } else {
    headerIndex -= 1;
  }
  headerContent[headerIndex].style.display = "block";
  active[headerIndex].classList.add('active')
  headerContent[headerIndex].classList.add('active')

};

runSlider();

console.log('😁😁😁')
