const mapFilter = document.querySelector('.map__filters');
const selectHousingType = mapFilter.querySelector('#housing-type'); // тип жилья
const selectHousingPrice  = mapFilter.querySelector('#housing-price'); // цена
const selectHousingRooms  = mapFilter.querySelector('#housing-rooms'); // кол-во комнат
const selectHousingGuests  = mapFilter.querySelector('#housing-guests'); // кол-во гостей
const selectedHousingFeatures = mapFilter.querySelectorAll('.map__checkbox:checked'); // выбранные преимущества (checkbox)


const matchCheckAdverts = (adverts) => {
  selectHousingType.addEventListener('change', () => {
    const checkAds = adverts.filter((item) => {
      if (item.offer.type === selectHousingType.value) {
        return true;
      }
    });
    return checkAds.slice(0, 10);
  });
};

export {matchCheckAdverts};

