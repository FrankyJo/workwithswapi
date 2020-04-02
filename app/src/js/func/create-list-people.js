import {createElement} from "./create-element";
import {connectionAPI} from "./connection";

const containerItems = document.querySelector('.container__items');
const singleItems = document.querySelector('.info__items');

//создание списка людей
export function createListPeople(data) {
  let i = 1;

  const listPeopleContainer = createElement('ul');
  listPeopleContainer.setAttribute('class', 'list-people');

  if(singleItems.classList.contains('film_wrapper')){
    singleItems.classList.remove('film_wrapper')
  }
  console.log(data);
  data.results.map(function (item) {
      let listPeople = createElement('li')
      listPeople.setAttribute('data-item', 'people/'+ i)
      listPeople.setAttribute('data-id', i++)
      listPeople.textContent = item['name'];
      listPeopleContainer.appendChild(listPeople)
    }
  )

  containerItems.appendChild(listPeopleContainer);

  listPeopleContainer.addEventListener('click',function (e) {
    let target = e.target;
    let singlePerson = connectionAPI(target.getAttribute('data-item'));
    singlePerson.then(data => createSingleItemsInfo(data, target))
  })
}

//Cоздание инфы об одном человеке
function createSingleItemsInfo(data,target) {
  const peopleArr = data
  const singleItemsInfo = createElement('ul');
  const imgPeople = createElement('img');
  console.log(peopleArr);
  let index = 1;

  singleItemsInfo.setAttribute('class', 'people__info-container');
  imgPeople.setAttribute('src', `https://starwars-visualguide.com/assets/img/characters/${target.getAttribute('data-id')}.jpg`);
  imgPeople.setAttribute('class', 'foto-people');
  for (let key in peopleArr) {

    if (index <= 8) {

      const singleItemsAttr = createElement('li')
      singleItemsAttr.textContent =`${key}|${peopleArr[key]}`;

      singleItemsInfo.appendChild(singleItemsAttr);
    }
    index++
  }

  if (singleItems.querySelector('.people__info-container') != null) {
    document.querySelector('.people__info-container').remove();
    document.querySelector('.foto-people').remove();
    singleItems.appendChild(imgPeople);
    singleItems.appendChild(singleItemsInfo);
  } else {
    singleItems.appendChild(imgPeople);
    singleItems.appendChild(singleItemsInfo);
  }

}
