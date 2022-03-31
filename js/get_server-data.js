//import {createCustomPopup} from './popup.js';

const DataServer = 'https://25.javascript.pages.academy/keksobooking/data';

const fetchData = () => fetch(DataServer)
  .then((response) => response.json())
  .then((offers) => offers)
  .catch(() => console.error('Ошибка при загрузке данных с сервера!'));

export {fetchData};
