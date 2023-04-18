import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

galleryItems.innerHTML = '';
for (const galleryItem of galleryItems) {

    const newItem = `
    
    <a class="gallery__item" href="${galleryItem.original}">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      alt="${galleryItem.description}"
      />
      </a>`
    
    gallery.innerHTML += newItem;
};

const lightbox = new SimpleLightbox(".gallery a", {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
    captionPosition: "bottom"
});

console.log(galleryItems);
