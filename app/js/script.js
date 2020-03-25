const colorTheme = document.querySelector('.colorTheme');

const popUp = document.querySelector('.popUp');
const popUpContent = document.querySelector('.popUpContent');
const saveName = document.querySelector('.sendName');


const menuPeople = document.querySelector('.for_people');
const menuFilm = document.querySelector('.for_films');
const containerItems = document.querySelector('.container__items');
const singleItems = document.querySelector('.info__items');


//запускааем попап
document.addEventListener('DOMContentLoaded', function () {
    if (getCookie('user')) {
        popUpContent.innerHTML = '<p>Привет ' + getCookie('user') + '</p>';
        popUp.style.display = "block";
        saveName.textContent = "Далее";
    } else {
        popUp.style.display = "block";
    }
})

//меняем цвет темы
colorTheme.addEventListener('click', function () {
    if (document.body.classList.contains('blackTheme')) {
        document.body.classList.remove('blackTheme')
    } else {
        document.body.classList.add('blackTheme')
    }

})

//сохраняем имя в куки
saveName.addEventListener('click', function () {
    const nameUser = document.querySelector('.namePopUp')
    if (nameUser) {
        document.cookie = "user=" + nameUser.value;
    }
    popUp.style.display = "none";
})

//получаем куки
function getCookie(name) {
    const matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ))
    return matches ? decodeURIComponent(matches[1]) : undefined
}


//Connection
function connectionAPI(url) {
    createPreloader()
    return fetch(url)
        .then(response => response.json())
        .then((data) => {
            removePreloader()
            return data
        })
}

//Create Element
function createElement(elemt, classElement) {
    let newElement = document.createElement(elemt);
    if (classElement) {
        newElement.setAttribute('class', classElement);
    }
    return newElement;
}

//function preloader
function createPreloader() {
    const prelodaer = document.createElement('div');
    const imgPreloader = document.createElement('img')
    prelodaer.setAttribute('class', 'preloader');
    imgPreloader.setAttribute('src', 'https://i.gifer.com/AvGf.gif');
    prelodaer.appendChild(imgPreloader);
    document.querySelector('.container').appendChild(prelodaer)
}

//removePreloader
function removePreloader() {
    document.querySelector('.preloader').remove();
}


// вызов списка людей
menuPeople.addEventListener('click', function () {
    const url = "https://swapi.co/api/people/"
    const peopleJSON = connectionAPI(url);
    peopleJSON.then(data => createListPeople(data))

    if(document.querySelector('.info__items') != null){
        document.querySelector('.info__items').textContent = '';
    }
    if(document.querySelector('.list-people') != null){
        document.querySelector('.list-people').remove();
    }
    if(document.querySelector('.film_container') !=null){
        document.querySelector('.film_container').remove()
    }
})

//создание списка людей
function createListPeople(data) {
    let i = 1;
    const listPeopleContainer = createElement('ul');
    listPeopleContainer.setAttribute('class', 'list-people');
    if(singleItems.classList.contains('film_wrapper')){
        singleItems.classList.remove('film_wrapper')
    }
    data.results.map(function (item) {
            let listPeople = createElement('li')
            listPeople.setAttribute('data-item', item['url'])
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
    imgPeople.setAttribute('src', 'https://starwars-visualguide.com/assets/img/characters/' + target.getAttribute('data-id') + '.jpg');
    imgPeople.setAttribute('class', 'foto-people');
    for (let key in peopleArr) {

        if (index <= 8) {

            const singleItemsAttr = createElement('li')
            singleItemsAttr.textContent = key + ' | ' + peopleArr[key];

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



//вызов списка фильмов
menuFilm.addEventListener('click', function () {
    const url = "https://swapi.co/api/films/"
    const filmsJSON = connectionAPI(url);
    filmsJSON.then(data => createListFilms(data))

    if(document.querySelector('.info__items') != null){
        document.querySelector('.info__items').textContent = '';
    }
    if(document.querySelector('.list-people') != null){
        document.querySelector('.list-people').remove();
    }
    if(document.querySelector('.film_container') !=null){
        document.querySelector('.film_container').remove()
    }
})

//создание списка фильмов
function createListFilms(data) {
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

            buttoShowMore.textContent = 'Show more';
            buttoShowMore.setAttribute('data-item', item['url'])
            buttoShowMore.setAttribute('data-id', ++i)

            imageFilm.setAttribute('src', 'https://starwars-visualguide.com/assets/img/films/' + i + '.jpg')
            titleFilm.textContent = item['title']
            descriptionFilm.textContent = item['opening_crawl'].substr(0, 50) + '...'


            singleFilm.appendChild(titleFilm)
            singleFilm.appendChild(imageFilm)
            singleFilm.appendChild(descriptionFilm)
            singleFilm.appendChild(buttoShowMore)
            listFilm.appendChild(singleFilm)
        }
    )
    containerItems.appendChild(listFilm)

    listFilm.addEventListener('click',function (e) {
        let target = e.target;
        let singlePerson = connectionAPI(target.getAttribute('data-item'));
        singlePerson.then(data => createSingleFilm(data, target))
    })
}

//Вывод инфы об одном фильме
function createSingleFilm(data, target) {
    const filmArr = data;
    const image = createElement('img')
    const filmInfo = createElement('ul')
    const characters = createElement('ul')

    filmInfo.setAttribute('class', 'film__info-container');
    characters.setAttribute('class', 'characters');
    image.setAttribute('src', 'https://starwars-visualguide.com/assets/img/films/' + target.getAttribute('data-id') + '.jpg')

    let index = 1;


    for (let key in filmArr) {
        if (index <= 6) {
            const SingleFilmAttr = createElement('li')
            SingleFilmAttr.textContent = key + ' | ' + filmArr[key];

            filmInfo.appendChild(SingleFilmAttr);
        }
        index++
    }


    filmArr['characters'].map(function (el) {
        let singleCharacter = connectionAPI(el);
        singleCharacter.then(function (data) {

            let singleCharacter = createElement('li');
            let nameCharacter = createElement('h2');
            let photoCharacter = createElement('img');

            let numCharacter = data['url']
            numCharacter = numCharacter.substring(numCharacter.length - 3, numCharacter.length - 1)

            photoCharacter.setAttribute('src', 'https://starwars-visualguide.com/assets/img/characters/' + numCharacter + '.jpg')
            nameCharacter.textContent = data['name']
            singleCharacter.appendChild(photoCharacter)
            singleCharacter.appendChild(nameCharacter)
            characters.appendChild(singleCharacter)
        })
    })
    if (singleItems.querySelector('.charKacters') != null) {
        document.querySelector('.film__info-container').remove();
        document.querySelector('.characters').remove();
        singleItems.appendChild(filmInfo);
        singleItems.appendChild(characters);
    } else {
        singleItems.appendChild(filmInfo);
        singleItems.appendChild(characters);
    }

}