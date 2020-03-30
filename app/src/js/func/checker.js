export function checker() {
  if(document.querySelector('.info__items') != null){
    document.querySelector('.info__items').textContent = '';
  }
  if(document.querySelector('.list-people') != null){
    document.querySelector('.list-people').remove();
  }
  if(document.querySelector('.film_container') !=null){
    document.querySelector('.film_container').remove()
  }
}
