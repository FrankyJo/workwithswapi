const menuPeople = document.querySelector('.for_people');
const menuFilm = document.querySelector('.for_films');
const containerItems = document.querySelector('.container__items');
const singlePeople = document.querySelector('.people_info');


//Connection
function connectionAPI(url) {
    return fetch(url)
        .then(response => response.json())
        .then((data) => {
            return data
        })
}

//Create Element
function createElement (elemt, classElement ){
    let newElement = document.createElement(elemt);
    if(classElement){
        newElement.setAttribute('class', classElement);
    }
    return newElement;
}
//remove Element
function removeElement (elem){
    document.querySelector(elem).remove();
}

menuPeople.addEventListener('click', function () {
    const url = "https://swapi.co/api/people/"
    const peopleJSON = connectionAPI(url);
    peopleJSON.then(data => createListPeople(data))
})

function createListPeople(data) {
    let i = 1;
    const listPeopleContainer = createElement('ul');
    listPeopleContainer.setAttribute('class','list-people');

    data.results.map(function (item) {
            let listPeople = createElement('li')
            listPeople.setAttribute('data-people', item['url'])
            listPeople.setAttribute('data-id', i++)
            listPeople.textContent = item['name'];
            listPeopleContainer.appendChild(listPeople)
        }
    )
    containerItems.appendChild(listPeopleContainer);
}


containerItems.addEventListener('click', function (e) {
    const target = e.target;
    const url = target.getAttribute('data-people');
    const singlePeople = connectionAPI(url);

    singlePeople.then(data => createSinglePeopleInfo(data,target))


})

function createSinglePeopleInfo(data,target) {
    const peopleArr = data;
    const SinglePeopleInfo = createElement('ul');
    const imgPeople = createElement('img');

    let index = 1;

    SinglePeopleInfo.setAttribute('class', 'people__info-container');
    imgPeople.setAttribute('src', 'https://starwars-visualguide.com/assets/img/characters/'+target.getAttribute('data-id')+'.jpg');

    for(let key in peopleArr){

        if(index <= 8){

            const SinglePeopleAttr = createElement('li')
            SinglePeopleAttr.textContent = key + ' | ' + peopleArr[key];

            SinglePeopleInfo.appendChild(SinglePeopleAttr);
        }
        index++
    }

    if(singlePeople.querySelector('.people__info-container') != null){
        removeElement('.people__info-container');
        removeElement('.foto-people');
        singlePeople.appendChild(imgPeople);
        singlePeople.appendChild(SinglePeopleInfo);
    } else {
        singlePeople.appendChild(imgPeople);
        singlePeople.appendChild(SinglePeopleInfo);
    }

}


menuFilm.addEventListener('click',function(){
    const url = "https://swapi.co/api/films/"
    const filmsJSON = connectionAPI(url);
    filmsJSON.then(data => createListFilms(data))
    console.log(containerItems.querySelector('.list-people'))

    if(containerItems.querySelector('.list-people') != null ||
        singlePeople.querySelector('.people__info-container') != null){
        removeElement('.list-people');
        removeElement('.people__info-container');
        removeElement('.foto-people');

    } else if(containerItems.querySelector('.list-people') != null){
        removeElement('.list-people');
    }

})


function createListFilms(data) {
    let i = 0;
    const filmArr = data.results
    const listFilm = createElement('ul');
    const imgFilm = createElement('img');

    filmArr.map(function (item) {
        console.log(item);
        let singleFilm = createElement('li')
        singleFilm.setAttribute('data-film', item['url'])
        singleFilm.setAttribute('data-id', i++)
        singleFilm.textContent = item['title'];
        listFilm.appendChild(singleFilm)
        }
    )
    containerItems.appendChild(listFilm)
}