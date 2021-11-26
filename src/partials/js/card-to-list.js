import card from '../film-card.hbs';

const list = document.querySelector('.collection');

list.insertAdjacentHTML('beforeend', card);