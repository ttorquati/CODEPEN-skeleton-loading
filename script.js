const cardImage = document.querySelector('.card-image');
const cardTitle = document.querySelector('.card-title');
const cardDescription = document.querySelector('.card-description');

const renderCard = () => {
  cardTitle.textContent = 'This is a card title!';
  cardDescription.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.!';
  
  createImage();
  
  cardImage.classList.remove('loading');
  cardTitle.classList.remove('loading');
  cardDescription.classList.remove('loading');  
}

function createImage() {
  const img = new Image();
  img.classList.add('image');
  img.setAttribute('alt', 'Just an alt for accessibility reasons <3');
  img.setAttribute('src', 'https://www.w3schools.com/howto/img_nature_wide.jpg');
  
  cardImage.appendChild(img);
}

setTimeout(() => {
  renderCard();
}, 5000);
