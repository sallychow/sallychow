// JavaScript to toggle mobile menu
document.addEventListener("DOMContentLoaded", function () {
  // Get the hamburger checkbox, nav menu, and backdrop
  const hamburgerCheckbox = document.getElementById("burger-checkbox");
  const navMenu = document.getElementById("nav-menu");
  const navBackdrop = document.querySelector(".nav__backdrop");

  // Close menu when clicking on backdrop
  navBackdrop.addEventListener("click", function () {
    hamburgerCheckbox.checked = false;
  });

  // Close menu when clicking on a nav link (for mobile)
  const navLinks = document.querySelectorAll(".nav__link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      hamburgerCheckbox.checked = false;
    });
  });

  // Close menu when pressing Escape key
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && hamburgerCheckbox.checked) {
      hamburgerCheckbox.checked = false;
    }
  });
});

// ========================Cartoon and real in mobile==========================
document.addEventListener("DOMContentLoaded", function () {
  const photoContainer = document.querySelector(".photo-left");

  function handlePhotoToggle() {
    photoContainer.classList.toggle("toggled");
  }

  function setupMobileInteraction() {
    // Remove any existing click listeners to prevent duplicates
    photoContainer.removeEventListener("click", handlePhotoToggle);

    // Only add click event on mobile devices
    if (window.innerWidth <= 1080) {
      photoContainer.addEventListener("click", handlePhotoToggle);
    }
  }

  // Initial setup
  setupMobileInteraction();

  // Update if window is resized
  window.addEventListener("resize", function () {
    setupMobileInteraction();

    // Reset when returning to desktop size
    if (window.innerWidth > 1080) {
      photoContainer.classList.remove("toggled");
    }
  });
});
// ========================progress bar animation==========================
document.addEventListener("DOMContentLoaded", function () {
  // Initial state checking
  checkProgressBars();

  // Add scroll event listener
  window.addEventListener("scroll", function () {
    checkProgressBars();
  });

  function checkProgressBars() {
    const progressBars = document.querySelectorAll(".progress");

    progressBars.forEach((bar) => {
      const barPosition = bar.getBoundingClientRect();

      // Check if bar is in viewport
      if (barPosition.top < window.innerHeight && barPosition.bottom > 0) {
        // Element is in view - fill the bar
        bar.style.width = bar.style.getPropertyValue("--progress-width");
      } else {
        // Element is not in view - empty the bar
        bar.style.width = "0";
      }
    });
  }
});
// ========================DISCOVER Swiper-slide Section==========================
new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true, // Shows a grab cursor for better UX
  centeredSlides: true, // Centers the active slide
  slidesPerView: "auto", // Allows multiple slides to be visible based on their width
  coverflowEffect: {
    rotate: 0, // Rotation angle in degrees for the spinning effect
    stretch: 10, // Space between slides (0 for no extra stretch)
    depth: 50, // Depth for 3D perspective (adjust for prominence)
    modifier: 5, // Multiplier for effect intensity
    slideShadows: false, // Adds shadows for a 3D look
  },
  loop: true, // Enables continuous sliding
  // autoplay: {
  //   // Adds auto-spin functionality
  //   delay: 3000, // Time between slides in milliseconds (3 seconds)
  //   disableOnInteraction: false, // Keeps autoplay running even after user interaction
  // },
});

// marquee-content.js
document.addEventListener("DOMContentLoaded", () => {
  const marqueeContent = document.querySelector(".marquee-content");
  const marqueeItems = marqueeContent.querySelectorAll(".marquee-item");
  const numberOfDuplicates = 5; // Duplicate the items 5 times for a total of 6 sets (1 original + 5 duplicates)

  // Duplicate the items
  for (let i = 0; i < numberOfDuplicates; i++) {
    marqueeItems.forEach((item) => {
      const clone = item.cloneNode(true);
      marqueeContent.appendChild(clone);
    });
  }
});

// Click Me Animation
document.addEventListener("DOMContentLoaded", () => {
  const state1 = document.getElementById("state1");
  const state2 = document.getElementById("state2");
  const state3 = document.getElementById("state3");

  // 點擊第一個圖片
  state1.addEventListener("click", () => {
    state1.classList.remove("active");
    state2.classList.add("active");
  });

  // 點擊箭頭按鈕
  const arrowButton = document.querySelector(".arrow-button");
  arrowButton.addEventListener("click", () => {
    state2.classList.remove("active");
    state3.classList.add("active");
  });
});
