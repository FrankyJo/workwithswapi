const popUp = document.querySelector('.popUp');
const popUpContent = document.querySelector('.popUpContent');
const saveName = document.querySelector('.sendName');

//запускааем попап
export const popUpShow = () => {
    if (getCookie('user')) {
      popUpContent.innerHTML = '<p>Привет, ' + getCookie('user') + '</p>';
      popUp.style.display = "block";
      saveName.textContent = "Далее";
    } else {
      popUp.style.display = "block";
    }

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
}
