import {getRandomInt, getRandomFloat} from './get_random_value.js';


const generateAvatar = () => {
  const numUser = String(getRandomInt(1, 10)).padStart(2, 0);
  const avatar = `img/avatars/user${numUser}.png`;
  return avatar;
};


const generateInfoHouse = () => {

  const place = {
    lat: getRandomFloat(35.65, 35.7, 5),
    lng: getRandomFloat(139.7, 139.8, 5),
  };


  const housingPrice =  getRandomInt(10, 100);

  const randomHousingType = () =>  {
    const housingTypes = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
    return housingTypes[getRandomInt(0, housingTypes.length - 1)];
  };


  const rooms = getRandomInt(1, 10);

  const guests = getRandomInt(1, 20);

  const checkinTimes = ['12:00', '13:00', '14:00'];
  const getCheckinTime = () => checkinTimes[getRandomInt(0, checkinTimes.length - 1)];

  const getCheckoutTime = () => checkinTimes[getRandomInt(0, checkinTimes.length - 1)];

  const getRandomFeatures = () => {

    const featuresList = ['wifi', 'dishwashar', 'parking', 'washer', 'elevator', 'conditioner'];

    const features = new Set();
    const featuresLength = getRandomInt(1, featuresList.length);

    while (features.size < featuresLength) {
      const randomFeature = featuresList[getRandomInt(0, featuresList.length-1)];
      features.add(randomFeature);
    }
    return [...features];
  };

  const getRandomPhotos = () => {
    const photosArr = [
      'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
      'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
      'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
    ];

    return photosArr.slice(0, getRandomInt(1, photosArr.length));
  };

  const offer = {
    title: 'Заголовок предложения', // заменить
    address: place,
    housingPrice,
    type: randomHousingType(),
    rooms,
    guests,
    checkin: getCheckinTime(checkinTimes),
    checkout: getCheckoutTime(checkinTimes),
    features: getRandomFeatures(),
    description: 'Описание помещения', // заменить
    photos: getRandomPhotos(),
  };

  switch(offer.type) {
    case 'palace': offer.description = 'Дворец для настоящего королевского отдыха';
      break;
    case 'flat': offer.description = 'Светлая и просторная квартира с видом на море';
      break;
    case 'house': offer.description = 'Большой двухэтажный дом в экологически чистом месте';
      break;
    case 'bungalow': offer.description = 'Калифорнийское бунгало с колоннами и покатой крышей';
      break;
    case 'hotel': offer.description = 'Лучший отель в городе';
      break;
  }

  return offer;
};

const descriptionAdd = () => ({
  generateAvatar: generateAvatar(),
  generateInfoHouse: generateInfoHouse(),
});

const generateArrAd = new Array(1).fill(null).map(() => descriptionAdd());

console.log(generateArrAd[0].generateInfoHouse.title); // нужно упростить способ обращения

//---------------------------------------------------------------

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
