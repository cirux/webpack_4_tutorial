import Snoopy from './snoopy.jpg';

function addImage() {
    const img = document.createElement('img');
    img.alt = 'snoopy';
    img.width = 300;
    img.src = Snoopy;
    const body = document.querySelector('body');
    body.appendChild(img);
}

export default addImage;