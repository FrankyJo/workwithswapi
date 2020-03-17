

function connectionAPI(url){
      return fetch(url)
        .then(response =>  response.json())
        .then((data) => {
           return data
        })
}


function  createListPeople(){
    const url = "https://swapi.co/api/people/"

    let listPeopleContainer = document.createElement('ul')
    let listPeople = document.createElement('li')
    let people = document.querySelector('.people');

    let peopleJSON =  connectionAPI(url);

    listPeopleContainer.setAttribute('class','people__container');
    listPeopleContainer.appendChild(listPeople);
    people.appendChild(listPeopleContainer);

    console.log(peopleJSON)
}
createListPeople();

