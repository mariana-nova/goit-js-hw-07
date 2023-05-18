import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



const list = document.querySelector('.gallery');

const  createGallery = (items) =>{
    return items.map((item) =>
    `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img
                class="gallery__image"
                src= '${item.preview}'
                data-source= '${item.original}'
                alt= '${item.description}'
            />
        </a>
    </li>`).join('');
}

const clickImage = (imageAction) => {
    action(imageAction);

    if (imageAction.target.nodeName !== 'IMG'){
        return;
    }

    const instance = basicLightbox.create(
        
        `  <img src="${imageAction.target.dataset.source}">`
        
    );
    instance.show();

    gallery.addEventListener('keydown', (imageAction) => {
        if (imageAction.code === "Escape"){
            instance.close();
        }
    })
}

const action = (imageAction) => {
    imageAction.preventDefault();
}


const addGallery = createGallery(galleryItems);
list.innerHTML = addGallery;
list.addEventListener('click', clickImage);

console.log(list.hasAttribute("data-source"));

