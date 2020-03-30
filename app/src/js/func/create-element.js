export function createElement(elemt, classElement) {
  let newElement = document.createElement(elemt);
  if (classElement) {
    newElement.setAttribute('class', classElement);
  }
  return newElement;
}
