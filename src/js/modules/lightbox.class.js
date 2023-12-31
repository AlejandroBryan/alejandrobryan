import SimpleLightbox from 'simplelightbox';

// Initialize SimpleLightbox

export default class Lightbox {
  constructor() {
    this.events();
  }
  events() {
    let options = {
      maxWidth: screen.width > 600 ? 800 : screen.width, 
      maxHeight: screen.height > 600 ? 600 : screen.height,
      captions: true,
      loadingCaption: 'Loading...',
      spinner: true
    };
    const lightbox = new SimpleLightbox('.gallery a', options);
    
  }
}
