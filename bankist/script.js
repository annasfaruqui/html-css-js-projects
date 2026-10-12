"use strict";

//////////////////////////////////////////////////////////
// All variables

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

const nav = document.querySelector(".nav");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

///////////////////////////////////////////////////////////
// MODAL WINDOW

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach(btn => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

///////////////////////////////////////////////////////////
// BUTTON SCROLLING

btnScrollTo.addEventListener("click", function (e) {
  // OLD SCHOOL WAY

  // const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);

  // console.log(e.target.getBoundingClientRect());
  // // getBoundingClientRect() gives an object containing various POSITION properties of an element (coordinates and stuff)....This is always relative to the visible viewport

  // console.log("current scroll (X/Y)", window.pageXOffset, window.pageYOffset);
  // // YOffset is basically the distance from the top to the page to the top of the tab when scrolled (basically the distance that is scrolled) (Basically, we get the current scroll position). XOffset is the same, but in horizontal direction

  // console.log(
  //   "height/width wiewport",
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  // // Scrolling

  // // window.scrollTo(
  // //   s1coords.left + window.pageXOffset,
  // //   s1coords.top + window.pageYOffset
  // // );

  // // using only 's1coord.top' will scroll only the amount of pixels from current top of viewport to the top of the section (will NOT ensure it scrolls to the section 1), NOT the amount of pixels from the top of the page to the top of the section (Full length)
  // // (Therefore, using 's1coord.top + window.pageOffset' will definitely ensure it scrolls to the top of section 1 irrespective of the viewport, and the position of the page when the button was clicked)
  // // if not understood, think HARD

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: "smooth",
  // });

  // MODERN WAY (only works in modern browsers)
  section1.scrollIntoView({ behavior: "smooth" });
});

//////////////////////////////////////////////////////////
// PAGE NAVIGATION (SMOOTH SCROLL)

// Using forEach applies the addEventListener method to all the elements that have class nav__link, and this can impact performance as a lot of copies having same addEventListener function are created

// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();

//     const id = this.getAttribute("href");
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

// 1.Add event Listener to common parent element
// 2. Determine what element originated the element

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

//////////////////////////////////////////////////////////
// TABBED COMPONENT

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(t => t.classList.remove("operations__tab--active"));
  tabsContent.forEach(c => c.classList.remove("operations__content--active"));

  // Active tab
  clicked.classList.add("operations__tab--active");

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

//////////////////////////////////////////////////////////
// MENU FADE ANIMATION

const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    console.log(e.target);
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// Passing "argument" into handler
nav.addEventListener("mouseover", handleHover.bind(0.5));
// REFER NOTES for why bind method is used in the event handler
nav.addEventListener("mouseout", handleHover.bind(1));

//////////////////////////////////////////////////////////
// STICKY NAVIGATION

// Very BAD practice using the "scroll" event
// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);

// window.addEventListener("scroll", function (e) {
//   console.log(window.scrollY);
//   if (window.scrollY > initialCoords.top) nav.classList.add("sticky");
//   else nav.classList.remove("sticky");
// });

// Good practice: Intersection Observer API (REFER NOTES):

// EXPLANATION of Intersection Observer API:
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

// Implementation of Sticky navigation using Intersection Observer API
const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

//////////////////////////////////////////////////////////
// REVEAL SECTIONS (SEE video & REFER Notes)

const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");

  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add("section--hidden");
});

//////////////////////////////////////////////////////////
// LAZY LOADING IMAGES

const imgTargets = document.querySelectorAll("img[data-src]");

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});

imgTargets.forEach(img => imgObserver.observe(img));

//////////////////////////////////////////////////////////
// SLIDER COMPONENT
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotsContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotsContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach(dot => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next Slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();

  // Event Handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    console.log(e);
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  });

  dotsContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
// REFERENCE LECTURES

/*

/////////////////////////////////////
// Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector(".header");
const allSections = document.querySelectorAll(".section");
console.log(allSections); // Returns a Nodelist

document.getElementById("section--1");
const allButtons = document.getElementsByTagName("button");
console.log(allButtons); // Returns a HTMLCollection (updates automatically)

console.log(document.getElementsByClassName("btn")); // Returns a HTMLCollection

//////////////////////////////////////
// Creating and inserting elements

const message = document.createElement("div");
message.classList.add("cookie-message");
// message.textContent = "We use cookies for improved functionality and analytics";
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// Adds the element in parenthesis as first child of the element on which the method is called (Here, message element is added as the first child of the header element)
// header.prepend(message);

// This one adds the elements as the last child
header.append(message);
// the message element is now a live elemnet living in the DOM, therefore it cannot be at multiple places at the same time.

// header.append(message.cloneNode(true));
// this one creates a clone of the message element, so that it can be displayed at multiple places at the same time

// These methods insert the element before and after the header element respectively
// header.before(message);
// header.after(message);

///////////////////////////////////////
// Delete elements

document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    // message.remove();  // recent method
    message.parentElement.removeChild(message); // old traditional method
  });

///////////////////////////////////////
// Styles
message.style.backgroundColor = "#37383d";
message.style.width = "120%";

// We cannot get the style properties that are defined in the CSS, we can only get styles that we define explicitly using JS
console.log(message.style.height);
console.log(message.style.backgroundColor);

// To get the CSS styles, we use the following property
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 30 + "px";

// Used to change values of variables defined in the CSS
document.documentElement.style.setProperty("--color-primary", "orangered");
// documentElement is the equivalent of the document root of CSS

///////////////////////////////////////
// Attributes
const logo = document.querySelector(".nav__logo");
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

// Non-standard
console.log(logo.designer); // undefined
console.log(logo.getAttribute("designer"));
logo.setAttribute("company", "Bankist");
console.log(logo.getAttribute("company"));

// Absolute and relative versions of the URLs
console.log(logo.src); // absolute URL
console.log(logo.getAttribute("src")); // relative URL

const link = document.querySelector(".nav__link--btn");
console.log(link.href); // absolute
console.log(link.getAttribute("href")); // relative

// Data attributes (special type of attributes)
console.log(logo.dataset.versionNumber); // tranform to camelCase

// Classes
logo.classList.add("c", "j"); // Adds classes to element
logo.classList.remove("c", "j"); // Removes classes from elements
logo.classList.toggle("c", "j"); // Toggles classes
logo.classList.contains("c", "j"); // Checks if element contains a particular class

// Don't use (this will overwrite all the classes and allow us to use only one class on an element
// logo.className = "jonas";

*/

////////////////////////////////////
// Types of Events and Event Handlers

/*

const h1 = document.querySelector("h1");

const alertH1 = function (e) {
  alert("addEventListener: You are reading the heading!");

  // Used to remove the EventListener function
  h1.removeEventListener("mouseenter", alertH1);
};

// The MODERN method
h1.addEventListener("mouseenter", alertH1);

setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 3000);

// OLD SCHOOL method
// h1.onmouseenter = function (e) {
//   alert("omouseenter: You are reading the heading!");
// };

*/

/////////////////////////////////////////
// Event Propagation

/*

// rgb(255,255,255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1 + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  // e.target points to the place where the event happened(NOT the element on which the event handler was attached)
  // e.currentTarget points to current element(The element on which the event handler was attached)
  console.log("LINK: ", e.target, e.currentTarget);
  console.log(e.currentTarget === this); // e.currentTarget is always equal to the this keyword in an event handler

  // Stop propagation
  // e.stopPropagation(); // Stops the event propagation and does not allow bubbling up the event from here.
});

document.querySelector(".nav__links").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("CONTAINER: ", e.target, e.currentTarget);
});

document.querySelector(".nav").addEventListener(
  "click",
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log("NAV: ", e.target, e.currentTarget);
    console.log("------------------");
  },
  false
);
// Passing a third argument as "true" in the event handler function will make the event handler no longer listen to bubbling events, but intead, to capturing events(from top to bottom of DOM tree upto the point where the addEventListener is attached to, NOT bottom to top of DOM tree as in case of event bubbling).(By default, it is false and NOT much used)

*/

/////////////////////////////////////////
// DOM Traversing (REFER NOTES)

/*

const h1 = document.querySelector("h1");

// Going downwards: child
console.log(h1.querySelectorAll(".highlight")); // selects any level deep children with highlight class

// For only direct child elements (does NOT go more than 1 level deep)
console.log(h1.childNodes); // NOT much used
console.log(h1.children); // more use cases

// Selects FIRST and LAST child elements
h1.firstElementChild.style.color = "white";
h1.lastElementChild.style.color = "orangered";

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

// Selects closest element up the DOM tree (usually used when we need to access elements that are NOT direct parent elements)
h1.closest(".header").style.background = "var(--gradient-secondary)";

// Selects itself
h1.closest("h1").style.background = "var(--gradient-primary)";

// Going sideways: siblings
console.log(h1.previousElementSibling); // direct prev sibling element
console.log(h1.nextElementSibling); // direct next sibling element

// NOT used much
console.log(h1.previousSibling); // selects direct prev node
console.log(h1.nextSibling); // selects direct next node

// Selects all siblings
console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = "scale(0.5)";
});

*/

////////////////////////////////////////////////////
// LifeCycle of DOM

/*

document.addEventListener("DOMContentLoaded", function (e) {
  console.log("HTML parsed and DOM tree built");
});

window.addEventListener("load", function (e) {
  console.log("PAGE fully loaded", e);
});

window.addEventListener("beforeunload", function (e) {
  e.preventDefault();
  console.log(e);
  e.returnValue = "message";
});

*/
