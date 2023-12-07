import SimpleLightbox from 'simplelightbox';

// Initialize SimpleLightbox

export default class Lightbox {
  constructor() {
    this.events();
  }
  events() {
    const lightbox = new SimpleLightbox('.gallery a', {
      captions: true,
      loadingCaption: 'Loading...',
      spinner: true
    });
    
  }
}
