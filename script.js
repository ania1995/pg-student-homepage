const userIconBox = document.querySelector(".header__userIcon");
const userIcon = document.querySelector(".fa-user");
const userBox = document.querySelector(".nav__profile");
const body = document.querySelector("body");

//start settings
start();

//CHECKING IF MODAL WITH USER INFORMATION SHOULD BE DAFAULT OPEN
window.addEventListener("resize", () => {
  const w = window.innerWidth;
  if (w > 820) {
    userBox.classList.remove("hidden");
  } else if (w < 820) {
    userBox.classList.add("hidden");
  }
});

//OPEN MODAL WITH USER INFORMATION
userIconBox.addEventListener("click", () => {
  userBox.classList.toggle("hidden");
  userIcon.classList.toggle("clickedUser");
});

// MODAL
const buttonCancel = document.querySelector(".buttonCancel");
const contactWindow = document.querySelector(".contact__container");
const backgroundContactWindow = document.querySelector(
  ".footer__content--contact"
);

//OPEN CONTACT MODAL
const contactButton = document.querySelector(".footer__content--link");
contactButton.addEventListener("click", (event) => {
  event.preventDefault();
  backgroundContactWindow.classList.add("visible");
});

// CLOSE CONTACT MODAL
buttonCancel.addEventListener("click", (event) => {
  event.preventDefault();
  backgroundContactWindow.classList.remove("visible");
});

// CLOSE CONTACT MODAL BY CLICK IN BACKGROUND
backgroundContactWindow.addEventListener("click", (event) => {
  if (
    backgroundContactWindow.classList.contains("visible") &&
    event.target === backgroundContactWindow
  ) {
    backgroundContactWindow.classList.remove("visible");
  }
});

//UTILS FUNCTION
function start() {
  const w = window.innerWidth;
  if (w <= 820) {
    userBox.classList.add("hidden");
  }
}
