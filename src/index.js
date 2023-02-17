import { registerImage } from "./lazyLoading";

const max = 739;
const min = 1;
const random = () => Math.floor(Math.random() * (max - min) + min);

const createImageNode = () => {
    const container = document.createElement('div');
    container.className = 'p-4 flex items-center' 

    const image = document.createElement('img');
    image.className = 'mx-auto rounded';
    image.width = '320';
    image.dataset.src = `https://api.capy.lol/v1/capybara/${random()}` 

    container.appendChild(image);
    return container;
};


const mountNode = document.getElementById('images');
const addButton = document.querySelector('button');

const addImage = () => {
    const newImage = createImageNode();
    mountNode.append(newImage);
    registerImage(newImage);
};

addButton.addEventListener("click", addImage);


