export {connectionAPI, createPreloader, removePreloader}


function connectionAPI(url) {
  const urlAPI = 'https://swapi.co/api/a'+url;
  createPreloader()
  return fetch(urlAPI)
    .then(response => response.json())
    .then((data) => {
      removePreloader()
      return data
    })
}
function createPreloader() {
  const prelodaer = document.createElement('div');
  const imgPreloader = document.createElement('img')
  prelodaer.setAttribute('class', 'preloader');
  imgPreloader.setAttribute('src', 'https://i.gifer.com/AvGf.gif');
  prelodaer.appendChild(imgPreloader);
  document.querySelector('.container').appendChild(prelodaer)
}
function removePreloader() {
  document.querySelector('.preloader').remove();
}
