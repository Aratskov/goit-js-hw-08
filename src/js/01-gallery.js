import { galleryItems } from './gallery-items';
import renderImage from './render';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const collectionGallery = document.querySelector('.gallery');
collectionGallery.insertAdjacentHTML('afterbegin', renderImage(galleryItems));

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
  doubleTapZoom: 1,
});
