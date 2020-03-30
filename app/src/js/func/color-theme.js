const colorTheme = document.querySelector('.colorTheme');

export const colorThemeTrigger = () => colorTheme.addEventListener('click', function () {
  if (document.body.classList.contains('blackTheme')) {
    document.body.classList.remove('blackTheme')
  } else {
    document.body.classList.add('blackTheme')
  }

})
