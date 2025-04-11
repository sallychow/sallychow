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
  if (noticeOverlay) {
    noticeOverlay.style.display = 'flex'; // Show the notice overlay
  } else {
    console.error('Notice overlay element not found');
  }
  if (mainContent) {
    mainContent.classList.add('blurred'); // Apply blur to main content
  } else {
    console.warn('Main content element not found; skipping blur effect');
  }
}