const userIconBox = document.querySelector(".header__userIcon");
const userIcon = document.querySelector(".fa-user");
const userBox = document.querySelector(".nav__profile");
const body = document.querySelector("body");

//start settings
start();

window.addEventListener("resize", () => {
  const w = window.innerWidth;
  if (w > 820) {
    userBox.classList.remove("hidden");
  } else if (w < 820) {
    userBox.classList.add("hidden");
  }
});

userIconBox.addEventListener("click", () => {
  userBox.classList.toggle("hidden");
  userIcon.classList.toggle("clickedUser");
});

function start() {
  const w = window.innerWidth;
  if (w <= 820) {
    userBox.classList.add("hidden");
  }
}

// MODAL
const buttonCancel = document.querySelector(".buttonCancel");
const contactWindow = document.querySelector(".contact__container");
const backgroundContactWindow = document.querySelector(
  ".footer__content--contact"
);
const contactButton = document.querySelector(".footer__content--link");

contactButton.addEventListener("click", (event) => {
  event.preventDefault();
  backgroundContactWindow.classList.add("visible");
  console.log("click");
});
// ELEMENT TO MODIFICATION & CANCEL
buttonCancel.addEventListener("click", (event) => {
  event.preventDefault();
  backgroundContactWindow.classList.remove("visible");
});
