
import {generateArrAd} from './generate_arr_ad.js';


const mapCanvas = document.querySelector('#map-canvas');

// Шаблон для клонирования
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const generatePopup = generateArrAd;

generatePopup.forEach((offer) => {
  const popupItem = cardTemplate.cloneNode(true);


  //popupItem.querySelector('.popup__title').textContent = offer.title;
  //popupItem.querySelector('.popup__text--address').textContent = 'тут будет адрес';
  // popupItem.querySelector('.popup__text--price').textContent = offer.price;
  // popupItem.querySelector('.popup__type').textContent = offer.type;
  // popupItem.querySelector('..popup__text--capacity').textContent = offer.rooms + 'комнаты для ' + offer.guests + 'гостей';
  // popupItem.querySelector('.popup__text--time').textContent = 'Заезд после ' + offer.checkin + ' , выезд до ' + offer.checkout;
  // popupItem.querySelector('.popup__features').textContent = offer.features;
  // popupItem.querySelector('.popup__description').textContent = offer.description;
  // popupItem.querySelector('.popup__photos').src = offer.photos;
  // popupItem.querySelector('.popup__avatar').src = author.avatar;

  mapCanvas.appendChild(popupItem);
});
