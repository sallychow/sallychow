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
