$(document).ready(function() {
    const scrollAmount = 30; // Adjust the amount of scrolling (in pixels)
    const animationDuration = 800; // Animation duration in milliseconds (adjust as needed)
  
    function animateImages() {
      $('.phone-long-scroll-mockup-v01-1-icon').animate({
        top: `-=${scrollAmount}px`
      }, animationDuration, 'linear').animate({
        top: `+=${scrollAmount}px`
      }, animationDuration, 'linear', animateImages);
  
      $('.icon').animate({
        top: `+=${scrollAmount}px`
      }, animationDuration, 'linear').animate({
        top: `-=${scrollAmount}px`
      }, animationDuration, 'linear', animateImages);
    }
  
    animateImages();
  });
  $(document).ready(function() {
    const scrollAmount = 30; // Adjust the amount of scrolling (in pixels)
    const animationDuration = 800; // Animation duration in milliseconds (adjust as needed)
  
    function animateElements() {
      $('.partenaires1, .porctime-parent, .porctime, .tre-king, .hdk, .laces, .kraken').animate({
        top: `-=${scrollAmount}px`
      }, animationDuration, 'linear').animate({
        top: `+=${scrollAmount}px`
      }, animationDuration, 'linear', animateElements);
    }
  
    animateElements();
  });
  
  