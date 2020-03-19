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
//function preloader
function createPreloader(){
    const prelodaer = document.createElement('div');
    const imgPreloader = document.createElement('img')
    prelodaer.setAttribute('class', 'preloader');
    imgPreloader.setAttribute('src','https://i.gifer.com/AvGf.gif');
    prelodaer.appendChild(imgPreloader);
    document.querySelector('.container').appendChild(prelodaer)
}

//removePreloader
function removePreloader(){
    document.querySelector('.preloader').remove();
}

//showItemInfo
function showItemInfo(func){
    containerItems.addEventListener('click', function (e) {
        const target = e.target;
        const url = target.getAttribute('data-item');
        console.log(url);
        const singleItems = connectionAPI(url);

        singleItems.then(data => func(data,target))
    })
}


menuPeople.addEventListener('click', function () {
    const url = "https://swapi.co/api/people/"
    const peopleJSON = connectionAPI(url);
    peopleJSON.then(data => createListPeople(data))


    if(containerItems.querySelector('.list-people') != null ||
        singleItems.querySelector('.people__info-container') != null){
        removeElement('.list-people');
        removeElement('.people__info-container');
        removeElement('.foto-people');

    } else if(containerItems.querySelector('.film_container') != null){
        removeElement('.film_container');
    }
})

function createListPeople(data) {
    let i = 1;
    const listPeopleContainer = createElement('ul');
    listPeopleContainer.setAttribute('class','list-people');

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




function createSingleItemsInfo(data,target) {
    const peopleArr = data;
    const singleItemsInfo = createElement('ul');
    const imgPeople = createElement('img');

    let index = 1;

    singleItemsInfo.setAttribute('class', 'people__info-container');
    imgPeople.setAttribute('src', 'https://starwars-visualguide.com/assets/img/characters/'+target.getAttribute('data-id')+'.jpg');
    imgPeople.setAttribute('class','foto-people');
    for(let key in peopleArr){

        if(index <= 8){

            const singleItemsAttr = createElement('li')
            singleItemsAttr.textContent = key + ' | ' + peopleArr[key];

            singleItemsInfo.appendChild(singleItemsAttr);
        }
        index++
    }

    if(singleItems.querySelector('.people__info-container') != null){
        removeElement('.people__info-container');
        removeElement('.foto-people');
        singleItems.appendChild(imgPeople);
        singleItems.appendChild(singleItemsInfo);
    } else {
        singleItems.appendChild(imgPeople);
        singleItems.appendChild(singleItemsInfo);
    }

}


menuFilm.addEventListener('click',function(){
    const url = "https://swapi.co/api/films/"
    const filmsJSON = connectionAPI(url);
    filmsJSON.then(data => createListFilms(data))


    if(containerItems.querySelector('.list-people') != null ||
        singleItems.querySelector('.people__info-container') != null){
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
    listFilm.setAttribute('class','film_container');

    filmArr.map(function (item) {
        console.log(item);
        let singleFilm = createElement('li')
        let imageFilm = createElement('img')
        let titleFilm = createElement('h2')
        let descriptionFilm = createElement('p')

        singleFilm.setAttribute('data-item', item['url'])
        singleFilm.setAttribute('data-id', i++)

        imageFilm.setAttribute('src','https://starwars-visualguide.com/assets/img/films/'+i+'.jpg')
        titleFilm.textContent = item['title']
        descriptionFilm.textContent = item['opening_crawl'].substr(0,50) + '...'

        singleFilm.appendChild(titleFilm)
        singleFilm.appendChild(imageFilm)
        singleFilm.appendChild(descriptionFilm)
        listFilm.appendChild(singleFilm)
        }
    )
    containerItems.appendChild(listFilm)
    //showItemInfo(createSingleFilm)
}


// function createSingleFilm(data) {
//     const filmArr = data;
//     const SingleFilmInfo = createElement('ul');
//
//     let index = 1;
//
//     SingleFilmInfo.setAttribute('class', 'film__info-container');
//     for(let key in filmArr){
//
//         if(index <= 8){
//
//             const SingleFilmAttr = createElement('li')
//             SingleFilmAttr.textContent = key + ' | ' + filmArr[key];
//
//             SingleFilmInfo.appendChild(SingleFilmAttr);
//         }
//         index++
//     }
//
//     if(singleItems.querySelector('.film__info-container') != null){
//         removeElement('.film__info-container');
//         removeElement('.foto-film');
//         singleItems.appendChild(imgPeople);
//         singleItems.appendChild(singleItemsInfo);
//     } else {
//         singleItems.appendChild(imgPeople);
//         singleItems.appendChild(singleItemsInfo);
//     }
// }