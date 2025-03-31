// ========================== Validation Contact Messages Start =================================
const nameError = document.getElementById("fullName-error");
const emailError = document.getElementById("email-error");
const phoneError = document.getElementById("phone-error");
const subjectError = document.getElementById("subject-error");
const messageError = document.getElementById("message-error");
const submitError = document.getElementById("submitError");

// Validate Full Name Start
function validateFull_name() {
  const fullName = document.getElementById("contact-name").value;
  // Conditional Statement
  if (fullName.length == 0) {
    nameError.innerHTML = "Name is required 😊";
    return false;
  }

  if (!fullName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "<i class='wrong bx bxs-x-circle'></i>";
    return false;
  }

  nameError.innerHTML = "<i class='correct bx bxs-check-circle' ></i>";
  return true;
}
// Validate Full Name End

// Email Validate Message
function validateEmail() {
  const email = document.getElementById("contact-email").value;

  // Conditional Statement
  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }

  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{3}$/)) {
    emailError.innerHTML = "<i class='wrong bx bxs-x-circle'></i>";
    return false;
  }

  emailError.innerHTML = "<i class='correct bx bxs-check-circle'></i>";
  return true;
}

// ----------------- Validate Phone Message Start -------------------- //
function validatePhone() {
  let phone = document.getElementById("contact-phone").value;
  // --------------- Conditional Statement -----------------
  if (phone.length == 0) {
    phoneError.innerHTML = "Phone is required 😊";
    return false;
  }

  if (phone.length !== 10) {
    phoneError.innerHTML = '<i class="wrong bi bi-x-circle-fill"></i>';
    return false;
  }

  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "Only digits";
    return false;
  }

  phoneError.innerHTML = "<i class='correct bi bi-check-circle-fill'></i>";
  return true;
}
// ----------------- Validate Phone Message End -------------------- //

// ----------------- Validate Subject Messgae Start ----------------- //
function validateSubject() {
  const subject = document.getElementById("contact-subject").value;

  // ------------- Conditional Statement --------------//
  if (subject.length == 0) {
    subjectError.innerHTML = "Subject is required 😊";
    return false;
  }

  subjectError.innerHTML = "<i class='correct bi bi-check-circle-fill'></i>";
  return true;
}
// ----------------- Validate Subject Messgae End ------------------ //

// ----------------- Validate Messgae Start --------------- //
function validateMessage() {
  const message = document.getElementById("contact-message").value;
  const required = 30;
  const remaining = required - message.length;

  // ----------- Conditional Statement ---------------
  if (message.length == 0) {
    messageError.innerHTML = "Message is required 😊";
    return false;
  }

  if (remaining > 0) {
    messageError.innerHTML = remaining + " more character(s) required";
    return false;
  }

  messageError.innerHTML = "<i class='correct bi bi-check-circle-fill'></i>";
  return true;
}
// ----------------- Validate Messgae End --------------- //

// ----------------- Validate Submit Message Start ----------------- //
function validateSubmit() {
  if (
    !validateFull_name() ||
    !validateEmail() ||
    !validatePhone() ||
    !validateSubject() ||
    !validateMessage()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please fix all errors";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
}
// ----------------- Validate Submit Message End ----------------- //

// ================== Countdown Timer Start ========================
// Set the date we're counting down to
const countDownDate = new Date("Apr 12, 2025 00:00:00").getTime();

// Update the count down every 1 second
const countdownFunction = setInterval(function () {
  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdown"
  document.getElementById("countdown").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);
// ================== Countdown Timer End ========================

//  ===================== Auto Typing Start ========================
// document.addEventListener("DOMContentLoaded", function () {
//   var options = {
//     strings: [
//       "Professional Graphic Design Solutions",
//       "High-Quality Digital Printing Services",
//       "Creative Design and Print Services",
//     ],
//     typeSpeed: 100,
//     backSpeed: 25,
//     backDelay: 2000,
//     startDelay: 500,
//     loop: true,
//   };

//   var typed = new Typed("#typed", options);
// });
// //  ===================== Auto Typing End ========================
// ============================== Validation Contact Messages End ===========================

const elements = document.querySelectorAll(".animate");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-animate");
    }
  });
}, {});

elements.forEach((el) => observer.observe(el));

// // Background Pre-Loader
// setTimeout(function () {
//   $(".backgroud-preloader").fadeToggle();
// }, 2500);
// ============= Custom Mouse Pointer Start ================ //
const followObject = document.querySelector(".follow-object");

document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  // Ensure it's always visible
  followObject.style.opacity = "1";

  // Make the object follow the mouse smoothly
  followObject.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
});

// ============= Custom Mouse Pointer End ================ //

// ======================= Go Top Button Start ======================//
const go_to_top = document.querySelector("[data-go-top]");
window.addEventListener("scroll", function () {
  window.scrollY >= 500
    ? go_to_top.classList.add("active")
    : go_to_top.classList.remove("active");
});

// ======================= Go Top Button End ======================//

// const mediaChatBox = document.querySelector('.media-chat-box');
const mediaChatBox = document.querySelector(".media-chat-box");
const mediaIcons = document.querySelectorAll(".media-icons");

mediaChatBox.addEventListener("click", () => {
  mediaIcons.forEach((icon) => {
    icon.classList.toggle("show"); // Toggle visibility
  });
});

document.addEventListener("click", (event) => {
  if (!mediaChatBox.contains(event.target)) {
    mediaIcons.forEach((icon) => {
      icon.classList.remove("show"); // Hide when clicking outside
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const dots = document.querySelectorAll(
    ".graphic-sec-two-carousel .owl-dots span"
  );
  dots.forEach((dot) => {
    dot.style.width = "15px";
    dot.style.height = "15px";
  });
});