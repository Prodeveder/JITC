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
const active = document.querySelectorAll(".__active");

const clearHeader = () => {
  headerContent.forEach((Element) => {
    Element.style.display = "none";
    Element.classList.remove("active");
  });

  active.forEach((Element) => {
    Element.classList.remove("active");
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
  active[headerIndex].classList.add("active");
  headerContent[headerIndex].classList.add("active");
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
  active[headerIndex].classList.add("active");
  headerContent[headerIndex].classList.add("active");
};

runSlider();

const toggleHeaders = document.querySelectorAll(".toggle__header");
const toggleMinus = document.querySelectorAll(".toggle__header .icon .minus");
const togglePlus = document.querySelectorAll(".toggle__header .icon .plus");
const togglePanels = document.querySelectorAll('.toggle__panel');

togglePanels[0].style.display = 'flex';

toggleHeaders.forEach((toggleHeader) => {
  toggleHeader.addEventListener("click", function () {
    let i = toggleHeader.classList[1];
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "flex") {
      panel.style.display = "none";
      toggleMinus[i].style.display = "none";
      togglePlus[i].style.display = "block";
    } else {
      panel.style.display = "flex";
      toggleMinus[i].style.display = "block";
      togglePlus[i].style.display = "none";
    }
  });
});

console.log("😁😁😁");
