const colorTheme = document.querySelector('.colorTheme');

colorTheme.addEventListener('click', function () {
    if( document.body.classList.contains('blackTheme')){
    document.body.classList.remove('blackTheme')
    } else{
        document.body.classList.add('blackTheme')
    }

})

const popUp = document.querySelector('.popUp');
const popUpContent = document.querySelector('.popUpContent');

const saveName = document.querySelector('.sendName');

saveName.addEventListener('click',function(){
    let nameUser = document.querySelector('.namePopUp')

    if(nameUser){
        document.cookie = "user="+nameUser.value;
    }
    popUp.style.display = "none";
})

//получаем куки
function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ))
    return matches ? decodeURIComponent(matches[1]) : undefined
}



document.addEventListener('DOMContentLoaded', function () {

    if(getCookie('user')){
        popUpContent.innerHTML = '<p>Привет '+getCookie('user')+'</p>';
        popUp.style.display = "block";
        saveName.textContent = "Далее";
    } else{
        popUp.style.display = "block";
    }
})


const menuPeople = document.querySelector('.for_people');
const menuFilm = document.querySelector('.for_films');
const containerItems = document.querySelector('.container__items');
const singleItems = document.querySelector('.info__items');


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

//remove Element
function removeElement(elem) {
    document.querySelector(elem).remove();
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

//showItemInfo
function showItemInfo(func) {
    containerItems.addEventListener('click', function (e) {
        const target = e.target;
        const url = target.getAttribute('data-item');
        if (url) {
            console.log(url)
            const singleItems = connectionAPI(url);
            singleItems.then(data => func(data, target))
        }

    })
}


menuPeople.addEventListener('click', function () {
    const url = "https://swapi.co/api/people/"
    const peopleJSON = connectionAPI(url);
    peopleJSON.then(data => createListPeople(data))


    if (containerItems.querySelector('.list-people') != null ||
        singleItems.querySelector('.people__info-container') != null) {
        removeElement('.list-people');
        removeElement('.people__info-container');
        removeElement('.foto-people');

    } else if (containerItems.querySelector('.film_container') != null) {
        removeElement('.film_container');
    }
    if(singleItems.querySelector('.film__info-container') != null){
        removeElement('.film__info-container');
        removeElement('.characters');
    }
})

function createListPeople(data) {
    let i = 1;
    const listPeopleContainer = createElement('ul');
    listPeopleContainer.setAttribute('class', 'list-people');

    data.results.map(function (item) {
            let listPeople = createElement('li')
            listPeople.setAttribute('data-item', item['url'])
            listPeople.setAttribute('data-id', i++)
            listPeople.textContent = item['name'];
            listPeopleContainer.appendChild(listPeople)
        }
    )
    containerItems.appendChild(listPeopleContainer);
    showItemInfo(createSingleItemsInfo)
}


function createSingleItemsInfo(data, target) {
    const peopleArr = data;
    const singleItemsInfo = createElement('ul');
    const imgPeople = createElement('img');

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
        removeElement('.people__info-container');
        removeElement('.foto-people');
        singleItems.appendChild(imgPeople);
        singleItems.appendChild(singleItemsInfo);
    } else {
        singleItems.appendChild(imgPeople);
        singleItems.appendChild(singleItemsInfo);
    }

}


menuFilm.addEventListener('click', function () {
    const url = "https://swapi.co/api/films/"
    const filmsJSON = connectionAPI(url);
    filmsJSON.then(data => createListFilms(data))


    if (containerItems.querySelector('.list-people') != null ||
        singleItems.querySelector('.people__info-container') != null) {
        removeElement('.list-people');
        removeElement('.people__info-container');
        removeElement('.foto-people');

    } else if (containerItems.querySelector('.list-people') != null) {
        removeElement('.list-people');
    }


})


function createListFilms(data) {
    let i = 0;
    const filmArr = data.results
    const listFilm = createElement('ul');
    listFilm.setAttribute('class', 'film_container');

    filmArr.map(function (item) {
            console.log(item);
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
    showItemInfo(createSingleFilm)
}


function createSingleFilm(data, target) {
    const filmArr = data;

    target.getAttribute('data-id')

    let image = createElement('img')
    let filmInfo = createElement('ul')
    let characters = createElement('ul')

    image.setAttribute('src', 'https://starwars-visualguide.com/assets/img/films/' + target.getAttribute('data-id') + '.jpg')

    console.log(filmArr);
    let index = 1;

    filmInfo.setAttribute('class', 'film__info-container');
    for (let key in filmArr) {
        if (index <= 6) {
            const SingleFilmAttr = createElement('li')
            SingleFilmAttr.textContent = key + ' | ' + filmArr[key];

            filmInfo.appendChild(SingleFilmAttr);
        }
        index++
    }

    characters.setAttribute('class','characters');
    filmArr['characters'].map(function (el) {
        let singleCharacter = connectionAPI(el);
        singleCharacter.then(function (data) {

            let nameCharacter = createElement('li');
            let photoCharacter = createElement('img');

            let numCharacter = data['url']
            numCharacter = numCharacter.substring(numCharacter.length - 3, numCharacter.length - 1)

            photoCharacter.setAttribute('src', 'https://starwars-visualguide.com/assets/img/characters/' + numCharacter + '.jpg')
            nameCharacter.textContent = data['name']
            characters.appendChild(photoCharacter)
            characters.appendChild(nameCharacter)
        })
    })
    if(singleItems.querySelector('.film__info-container') != null){
        removeElement('.film__info-container');
        removeElement('.characters');
        singleItems.appendChild(filmInfo);
        singleItems.appendChild(characters);
    } else {
        singleItems.appendChild(filmInfo);
        singleItems.appendChild(characters);
    }
}