// document.addEventListener('DOMContentLoaded', function() {
//     // Get the gallery items and the overlay elements
//     var galleryItems = document.querySelectorAll('.gallery-item');
//     var fullscreenOverlay = document.getElementById('fullscreen-overlay');
//     var fullscreenImage = document.getElementById('fullscreen-image');
  
//     // Add click event to each gallery item
//     galleryItems.forEach(function(item) {
//       item.addEventListener('click', function() {
//         // Get the image URL and title from the clicked item
//         var imageSrc = this.getAttribute('data-image');
//         var imageTitle = this.getAttribute('data-title');
  
//         // Set the src and alt attributes for the fullscreen image
//         fullscreenImage.src = imageSrc;
//         fullscreenImage.alt = imageTitle;
  
//         // Show the overlay
//         fullscreenOverlay.style.display = 'flex';
//       });
//     });
  
//     // Add click event to the overlay to close it when clicked
//     fullscreenOverlay.addEventListener('click', function() {
//       this.style.display = 'none';
//     });
//   });


$(document).ready(function(){
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        "showImageNumberLabel" : true,
        alwaysShowNavOnTouchDevices: true
    });
  });