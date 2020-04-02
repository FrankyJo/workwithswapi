import 'webp-in-css/polyfill';
import {colorThemeTrigger as colorTheme} from './func/color-theme';
import {popUpShow as popUp} from "./func/pop-up-set-name";
import {createListPeople} from "./func/create-list-people";
import {createListFilms} from "./func/create-list-film";
import {connectionAPI} from "./func/connection";
import {checker} from "./func/checker";

document.addEventListener('DOMContentLoaded', () => {
  popUp();
  colorTheme();

  const menuPeople = document.querySelector('.for_people');
  const menuFilm = document.querySelector('.for_films');

// вызов списка людей
  menuPeople.addEventListener('click', function (el) {
    const type = el.target.getAttribute('data-type');
    const peopleJSON = connectionAPI(type);
    checker();
    peopleJSON.then(data => createListPeople(data))


  })

//вызов списка фильмов
  menuFilm.addEventListener('click', function (el) {
      const type = el.target.getAttribute('data-type');
      const peopleJSON = connectionAPI(type);
      checker();
      peopleJSON.then(data => createListFilms(data))
    })
});




