import {createElement} from "./create-element";
import {connectionAPI} from "./connection";

const containerItems = document.querySelector('.container__items');
const singleItems = document.querySelector('.info__items');

//создание списка фильмов
export function createListFilms (data) {
  let i = 0;
  const filmArr = data.results
  const listFilm = createElement('ul');
  listFilm.setAttribute('class', 'film_container');
  singleItems.classList.add('film_wrapper')


  filmArr.map(function (item) {
      let singleFilm = createElement('li')
      let imageFilm = createElement('img')
      let titleFilm = createElement('h2')
      let descriptionFilm = createElement('p')
      let buttoShowMore = createElement('button')


      imageFilm.setAttribute('src',`https://starwars-visualguide.com/assets/img/films/${item['url'].substr(-2,1)}.jpg`);
      titleFilm.textContent = item['title'];
      descriptionFilm.textContent = item['opening_crawl'].substr(0, 50) + '...';

      singleFilm.setAttribute('class','list-single-film')
      singleFilm.setAttribute('data-item', item['url'].substr(-8))
      singleFilm.appendChild(titleFilm)
      singleFilm.appendChild(imageFilm)
      singleFilm.appendChild(descriptionFilm)
      singleFilm.appendChild(buttoShowMore)
      listFilm.appendChild(singleFilm)
    }
  )
  containerItems.appendChild(listFilm)
  listFilm.querySelectorAll('.list-single-film').forEach(el => {


    el.addEventListener('click',function () {
      let singlePerson = connectionAPI(el.getAttribute('data-item'));
      singlePerson.then(data => createSingleFilm(data, el))
    })
  })
}

//Вывод инфы об одном фильме
function createSingleFilm(data, el) {
  const filmArr = data;
  const image = createElement('img')
  const filmInfo = createElement('ul')
  const characters = createElement('ul')

  filmInfo.setAttribute('class', 'film__info-container');
  characters.setAttribute('class', 'characters');
  image.setAttribute('src', `https://starwars-visualguide.com/assets/img/films/${el.getAttribute('data-item').substr(-2,1)}.jpg`)

  let index = 1;


  filmInfo.appendChild(image);
  for (let key in filmArr) {
    if (index <= 6) {
      const SingleFilmAttr = createElement('li')
      SingleFilmAttr.textContent = key + ' | ' + filmArr[key];
      filmInfo.appendChild(SingleFilmAttr);
    }
    index++
  }


  filmArr['characters'].map(function (el) {

    const reg = /(api)\/(.*)/;
    let urlCharacterArray = reg.exec(el);
    let singleCharacter = connectionAPI(urlCharacterArray[2]);
    singleCharacter.then(function (data) {


      let singleCharacter = createElement('li');
      let nameCharacter = createElement('h2');
      let photoCharacter = createElement('img');

      let numCharacter = data['url']
      numCharacter = numCharacter.substring(numCharacter.length - 3, numCharacter.length - 1)

      photoCharacter.setAttribute('src', `https://starwars-visualguide.com/assets/img/characters/${numCharacter}.jpg`)
      nameCharacter.textContent = data['name']
      singleCharacter.appendChild(photoCharacter)
      singleCharacter.appendChild(nameCharacter)
      characters.appendChild(singleCharacter)
    })
  })
  if (singleItems.querySelector('.characters') != null) {
    document.querySelector('.film__info-container').remove();
    document.querySelector('.characters').remove();
    singleItems.appendChild(filmInfo);
    singleItems.appendChild(characters);
  } else {
    singleItems.appendChild(filmInfo);
    singleItems.appendChild(characters);
  }

}
