/* Section Nav */

function navFunction() {
  const containerDefault = document.querySelector(".container-default");
  document
    .querySelector(".open-navbar-icon-main")
    .addEventListener("click", () => {
      containerDefault.classList.add("change-main");
    });
  document
    .querySelector(".close-navbar-icon-main")
    .addEventListener("click", () => {
      containerDefault.classList.remove("change-main");
    });

  const colors = ["#a4b0be", "#57606f", "#747d8c", "#2f3542", "#ced6e0"];

  let i = 0;

  Array.from(document.querySelectorAll(".nav-link-main")).forEach((item) => {
    item.style.cssText = `background-color: ${colors[i++]}`;
  });
}
navFunction();
/* End of Section Nav */

/* Search section */

/* End of Search section */
const searchInputWrapper = document.querySelector(".search-input-wrapper");
const searchInput = document.querySelector(".search-input input");
const searchIcon = document.querySelector(".search-icon i");
const closeIcon = document.querySelector(".search-input i ");

searchIcon.addEventListener("click", () => {
  searchIcon.parentElement.classList.add("change");
  searchInputWrapper.classList.add("change");

  setTimeout(() => {
    searchInput.focus();
  }, 1000);
});

closeIcon.addEventListener("click", () => {
  searchIcon.parentElement.classList.remove("change");
  searchInputWrapper.classList.remove("change");
});
/* Section Slides Images */

let current = 1;
let currentOne = 1;
let currentTwo = 1;

const changeSlides = () => {
  const slideList = document.querySelectorAll(".slide");
  const slideListOne = document.querySelectorAll(".slide-1");
  const slideListTwo = document.querySelectorAll(".slide-2");

  const slides = Array.from(slideList);
  const slidesOne = Array.from(slideListOne);
  const slidesTwo = Array.from(slideListTwo);

  if (current > slides.length || current > slideListOne.length) {
    current = 1;
  }

  slides.forEach((slide) => {
    if (slide.classList[1].split("-")[1] * 1 === current) {
      slide.style.cssText = "visibility: visible; opacity:1";
    } else {
      slide.style.cssText = "visibility: hidden; opacity: 0";
    }
  });
};

const changeSlidesOne = () => {
  const slideListOne = document.querySelectorAll(".slide-01");

  const slidesOne = Array.from(slideListOne);

  if (currentOne > slidesOne.length) {
    currentOne = 1;
  }

  slidesOne.forEach((slideOne) => {
    if (slideOne.classList[1].split("-")[1] * 1 === currentOne) {
      slideOne.style.cssText = "visibility: visible; opacity:1";
    } else {
      slideOne.style.cssText = "visibility: hidden; opacity: 0";
    }
  });
};

const changeSlidesTwo = () => {
  const slideListTwo = document.querySelectorAll(".slide-02");

  const slidesTwo = Array.from(slideListTwo);

  if (currentTwo > slidesTwo.length) {
    currentTwo = 1;
  }

  slidesTwo.forEach((slideTwo) => {
    if (slideTwo.classList[1].split("-")[1] * 1 === currentTwo) {
      slideTwo.style.cssText = "visibility: visible; opacity:1";
    } else {
      slideTwo.style.cssText = "visibility: hidden; opacity: 0";
    }
  });
};

const playPause = () => {
  setInterval(() => {
    current++;
    changeSlides();
  }, 3000);
};

const playPauseOne = () => {
  setInterval(() => {
    currentOne++;
    changeSlidesOne();
  }, 3000);
};

const playPauseTwo = () => {
  setInterval(() => {
    currentTwo++;
    changeSlidesTwo();
  }, 3000);
};
changeSlides();
playPause();

changeSlidesOne();
playPauseOne();

changeSlidesTwo();
playPauseTwo();

const menBtnCatalog = document.getElementById("btn-men-catalog");
const womenBtnCatalog = document.getElementById("btn-women-catalog");
const salesBtnCatalog = document.getElementById("btn-sales-catalog");

menBtnCatalog.addEventListener("click", function () {
  window.location.href = "mancatalog.html";
});

function btnCatalog() {
  const menBtnCatalog = document.getElementById("btn-men-catalog");
  const womenBtnCatalog = document.getElementById("btn-women-catalog");
  const salesBtnCatalog = document.getElementById("btn-sales-catalog");

  menBtnCatalog.addEventListener("click", function () {
    window.location.href = "mancatalog.html";
  });
  womenBtnCatalog.addEventListener("click", function () {
    window.location.href = "womencatalog.html";
  });
  salesBtnCatalog.addEventListener("click", function () {
    window.location.href = "salescatalog.html";
  });
}

/* End of Section Slides Images */

/* Section Catalog Searching Bar */

function showCatalogDescrip(id) {
  hideElement();
  const hiddenElem = document.getElementById(id);

  hiddenElem.style.display = "";
  return false;
}

function hideElement() {
  const showElem = $(".card-style-exit");
  $(showElem).css("display", "none");
}
//onload="hideElement()"

/* End Section Catalog Searching Bar */

/* Sign up/ Sign in Section */

function signUpIn() {
  const sectionSignUp = document.querySelector(".section-signup");
  const headingSpan2 = document.querySelector(".heading-span-2");
  const form = document.querySelector(".form");

  const clearForm = () => {
    document.querySelectorAll(".form-input-wrapper").forEach((item) => {
      item.className = "form-input-wrapper";
    });
    form.reset();
  };

  document.querySelector(".signup-btn").addEventListener("click", () => {
    sectionSignUp.classList.add("change-sign");
    setTimeout(() => {
      headingSpan2.textContent = "Up";
    }, 200);
    form.className = "form sign-up";
    clearForm();
  });

  document.querySelector(".signin-btn").addEventListener("click", () => {
    sectionSignUp.classList.remove("change-sign");
    setTimeout(() => {
      headingSpan2.textContent = "In";
    }, 200);
    form.className = "form sign-in";
    clearForm();
  });

  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const password2 = document.getElementById("password2");

  const error = (input, message) => {
    const inputWrapper = input.parentElement;
    inputWrapper.className = "form-input-wrapper error";
    inputWrapper.querySelector(".message").textContent = message;
  };

  const success = (input) => {
    const inputWrapper = input.parentElement;
    inputWrapper.className = "form-input-wrapper success";
  };

  const checkEmail = (input) => {
    const regEx =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (regEx.test(input.value.trim())) {
      success(input);
    } else {
      error(input, "Email is not valid");
    }
  };

  const checkRequiredFields = (inputArr) => {
    inputArr.forEach((input) => {
      if (input.value.trim() == "") {
        if (input.id === "password2") {
          error(input, "password confirmation is required");
        } else {
          error(input, `${input.id} is required`);
        }
      } else {
        success(input);
      }
    });
  };

  const checkLength = (input, min, max) => {
    if (input.value.length < min) {
      error(input, `${input.id} must be at least ${min} characters`);
    } else if (input.value.lenght > max) {
      error(input, `${input.id} must be less than ${max} characters`);
    } else {
      success(input);
    }
  };

  const passwordsMatch = (input1, input2) => {
    if (input1.value !== input2.value) {
      error(input2, "Passwords do not match");
    }
  };

  form.addEventListener("submit", () => {     //  (e) removed
  //  e.preventDefault();                     // removed

    if (form.classList[1] === "sign-up") {
      checkRequiredFields([username, email, password, password2]);
      checkLength(username, 2, 15);
      checkLength(password, 5, 25);
      passwordsMatch(password, password2);
    } else {
      checkRequiredFields([email, password]);
    }
    checkEmail(email);
  });
}

/* End of Sign up/ Sign in Section */
/* Payment Section */
