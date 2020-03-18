const menuPeople = document.querySelector('.for_people');
const allPeople = document.querySelector('.people__container');
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
    let i = 0;
    data.results.map(function (item) {
            let listPeople = createElement('li')
            listPeople.setAttribute('data-people', item['url'])
            listPeople.setAttribute('data-id', i++)
            listPeople.textContent = item['name'];
            allPeople.appendChild(listPeople);
        }
    )
}


allPeople.addEventListener('click', function (e) {
    const target = e.target;
    const url = target.getAttribute('data-people');
    const singlePeople = connectionAPI(url);

    singlePeople.then(data => createSinglePeopleInfo(data))


})

function createSinglePeopleInfo(data) {
    const peopleArr = data;
    const SinglePeopleInfo = createElement('ul')
    SinglePeopleInfo.setAttribute('class', 'people__info-container');
    let index = 0;

    for(let key in peopleArr){

        if(index <= 7){
            const SinglePeopleAttr = createElement('li')
            SinglePeopleAttr.textContent = key + ' | ' + peopleArr[key];
            SinglePeopleInfo.appendChild(SinglePeopleAttr);
        }
        index++
    }
    if(singlePeople.querySelector('.people__info-container') != null){
        removeElement('.people__info-container');
        singlePeople.appendChild(SinglePeopleInfo);
    } else {
        singlePeople.appendChild(SinglePeopleInfo);
    }

}
