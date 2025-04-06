// Function to detect mobile devices
function isMobileDevice() {
  const userAgent = navigator.userAgent.toLowerCase();
  const mobileKeywords = [
      'android', 'webos', 'iphone', 'ipad', 'ipod', 'blackberry', 
      'windows phone', 'opera mini', 'mobile', 'tablet'
  ];
  
  return mobileKeywords.some(keyword => userAgent.includes(keyword));
}

// Get DOM elements
const mainContent = document.getElementById('main-content');
const noticeOverlay = document.getElementById('notice-overlay');

// Check if the device is mobile and show notice
if (isMobileDevice()) {
  noticeOverlay.style.display = 'flex'; // Show the notice overlay
  mainContent.classList.add('blurred'); // Apply blur to main content
}

document.addEventListener('DOMContentLoaded', function() {
  // Initial state checking
  checkProgressBars();
  
  // Add scroll event listener
  window.addEventListener('scroll', function() {
    checkProgressBars();
  });
  
  function checkProgressBars() {
    const progressBars = document.querySelectorAll('.progress');
    
    progressBars.forEach(bar => {
      const barPosition = bar.getBoundingClientRect();
      
      // Check if bar is in viewport
      if (barPosition.top < window.innerHeight && barPosition.bottom > 0) {
        // Element is in view - fill the bar
        bar.style.width = bar.style.getPropertyValue('--progress-width');
      } else {
        // Element is not in view - empty the bar
        bar.style.width = '0';
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
  loop: true // Enables continuous sliding
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
document.addEventListener('DOMContentLoaded', () => {
  const state1 = document.getElementById('state1');
  const state2 = document.getElementById('state2');
  const state3 = document.getElementById('state3');

  // 點擊第一個圖片
  state1.addEventListener('click', () => {
    state1.classList.remove('active');
    state2.classList.add('active');
  });

  // 點擊箭頭按鈕
  const arrowButton = document.querySelector('.arrow-button');
  arrowButton.addEventListener('click', () => {
    state2.classList.remove('active');
    state3.classList.add('active');
  });
});
