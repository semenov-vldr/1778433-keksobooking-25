const form = document.querySelector('.ad-form');
const fieldsetForm = form.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const mapFiltersSelect = mapFilters.querySelectorAll('select');
const mapFiltersFieldset = mapFilters.querySelectorAll('fieldset');
const mapFeatures = mapFilters.querySelector('.map__features');

const mapFiltersField = [fieldsetForm, mapFiltersSelect, mapFiltersFieldset];

const deactivateForm = () => {
  form.classList.add('ad-form--disabled');
  mapFilters.classList.add('map__filters--disabled');
  mapFeatures.classList.add('map__filters--disabled');
  mapFiltersField.forEach((item) => {item.disabled = true;});
};

const activateForm = () => {
  form.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('map__filters--disabled');
  mapFeatures.classList.remove('map__filters--disabled');
  mapFiltersField.forEach((item) => {item.disabled = false;});
};

deactivateForm();
activateForm();
