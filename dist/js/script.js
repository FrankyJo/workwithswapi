"use strict";var menuPeople=document.querySelector(".for_people"),menuFilm=document.querySelector(".for_films"),containerItems=document.querySelector(".container__items"),singlePeople=document.querySelector(".people_info");function connectionAPI(e){return fetch(e).then((function(e){return e.json()})).then((function(e){return e}))}function createElement(e,t){var n=document.createElement(e);return t&&n.setAttribute("class",t),n}function removeElement(e){document.querySelector(e).remove()}function createListPeople(e){var t=1,n=createElement("ul");n.setAttribute("class","list-people"),e.results.map((function(e){var o=createElement("li");o.setAttribute("data-people",e.url),o.setAttribute("data-id",t++),o.textContent=e.name,n.appendChild(o)})),containerItems.appendChild(n)}function createSinglePeopleInfo(e,t){var n=e,o=createElement("ul"),l=createElement("img"),i=1;for(var r in o.setAttribute("class","people__info-container"),l.setAttribute("src","https://starwars-visualguide.com/assets/img/characters/"+t.getAttribute("data-id")+".jpg"),n){if(i<=8){var c=createElement("li");c.textContent=r+" | "+n[r],o.appendChild(c)}i++}null!=singlePeople.querySelector(".people__info-container")?(removeElement(".people__info-container"),removeElement(".foto-people"),singlePeople.appendChild(l),singlePeople.appendChild(o)):(singlePeople.appendChild(l),singlePeople.appendChild(o))}function createListFilms(e){var t=0,n=e.results,o=createElement("ul");createElement("img");n.map((function(e){console.log(e);var n=createElement("li");n.setAttribute("data-film",e.url),n.setAttribute("data-id",t++),n.textContent=e.title,o.appendChild(n)})),containerItems.appendChild(o)}menuPeople.addEventListener("click",(function(){connectionAPI("https://swapi.co/api/people/").then((function(e){return createListPeople(e)}))})),containerItems.addEventListener("click",(function(e){var t=e.target;connectionAPI(t.getAttribute("data-people")).then((function(e){return createSinglePeopleInfo(e,t)}))})),menuFilm.addEventListener("click",(function(){connectionAPI("https://swapi.co/api/films/").then((function(e){return createListFilms(e)})),console.log(containerItems.querySelector(".list-people")),null!=containerItems.querySelector(".list-people")||null!=singlePeople.querySelector(".people__info-container")?(removeElement(".list-people"),removeElement(".people__info-container"),removeElement(".foto-people")):null!=containerItems.querySelector(".list-people")&&removeElement(".list-people")}));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJtZW51UGVvcGxlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWVudUZpbG0iLCJjb250YWluZXJJdGVtcyIsInNpbmdsZVBlb3BsZSIsImNvbm5lY3Rpb25BUEkiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY3JlYXRlRWxlbWVudCIsImVsZW10IiwiY2xhc3NFbGVtZW50IiwibmV3RWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUVsZW1lbnQiLCJlbGVtIiwicmVtb3ZlIiwiY3JlYXRlTGlzdFBlb3BsZSIsImkiLCJsaXN0UGVvcGxlQ29udGFpbmVyIiwicmVzdWx0cyIsIm1hcCIsIml0ZW0iLCJsaXN0UGVvcGxlIiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVNpbmdsZVBlb3BsZUluZm8iLCJ0YXJnZXQiLCJwZW9wbGVBcnIiLCJTaW5nbGVQZW9wbGVJbmZvIiwiaW1nUGVvcGxlIiwiaW5kZXgiLCJrZXkiLCJnZXRBdHRyaWJ1dGUiLCJTaW5nbGVQZW9wbGVBdHRyIiwiY3JlYXRlTGlzdEZpbG1zIiwiZmlsbUFyciIsImxpc3RGaWxtIiwiY29uc29sZSIsImxvZyIsInNpbmdsZUZpbG0iLCJhZGRFdmVudExpc3RlbmVyIiwiZSJdLCJtYXBwaW5ncyI6IkFBQUEsYUFBQSxJQUFNQSxXQUFhQyxTQUFTQyxjQUFjLGVBQ3BDQyxTQUFXRixTQUFTQyxjQUFjLGNBQ2xDRSxlQUFpQkgsU0FBU0MsY0FBYyxxQkFDeENHLGFBQWVKLFNBQVNDLGNBQWMsZ0JBSTVDLFNBQVNJLGNBQWNDLEdBQ25CLE9BQU9DLE1BQU1ELEdBQ1JFLE1BQUssU0FBQUMsR0FBUSxPQUFJQSxFQUFTQyxVQUMxQkYsTUFBSyxTQUFDRyxHQUNILE9BQU9BLEtBS25CLFNBQVNDLGNBQWVDLEVBQU9DLEdBQzNCLElBQUlDLEVBQWFmLFNBQVNZLGNBQWNDLEdBSXhDLE9BSEdDLEdBQ0NDLEVBQVdDLGFBQWEsUUFBU0YsR0FFOUJDLEVBR1gsU0FBU0UsY0FBZUMsR0FDcEJsQixTQUFTQyxjQUFjaUIsR0FBTUMsU0FTakMsU0FBU0MsaUJBQWlCVCxHQUN0QixJQUFJVSxFQUFJLEVBQ0ZDLEVBQXNCVixjQUFjLE1BQzFDVSxFQUFvQk4sYUFBYSxRQUFRLGVBRXpDTCxFQUFLWSxRQUFRQyxLQUFJLFNBQVVDLEdBQ25CLElBQUlDLEVBQWFkLGNBQWMsTUFDL0JjLEVBQVdWLGFBQWEsY0FBZVMsRUFBSSxLQUMzQ0MsRUFBV1YsYUFBYSxVQUFXSyxLQUNuQ0ssRUFBV0MsWUFBY0YsRUFBSSxLQUM3QkgsRUFBb0JNLFlBQVlGLE1BR3hDdkIsZUFBZXlCLFlBQVlOLEdBYy9CLFNBQVNPLHVCQUF1QmxCLEVBQUttQixHQUNqQyxJQUFNQyxFQUFZcEIsRUFDWnFCLEVBQW1CcEIsY0FBYyxNQUNqQ3FCLEVBQVlyQixjQUFjLE9BRTVCc0IsRUFBUSxFQUtaLElBQUksSUFBSUMsS0FIUkgsRUFBaUJoQixhQUFhLFFBQVMsMEJBQ3ZDaUIsRUFBVWpCLGFBQWEsTUFBTywwREFBMERjLEVBQU9NLGFBQWEsV0FBVyxRQUV4R0wsRUFBVSxDQUVyQixHQUFHRyxHQUFTLEVBQUUsQ0FFVixJQUFNRyxFQUFtQnpCLGNBQWMsTUFDdkN5QixFQUFpQlYsWUFBY1EsRUFBTSxNQUFRSixFQUFVSSxHQUV2REgsRUFBaUJKLFlBQVlTLEdBRWpDSCxJQUd3RCxNQUF6RDlCLGFBQWFILGNBQWMsNEJBQzFCZ0IsY0FBYywyQkFDZEEsY0FBYyxnQkFDZGIsYUFBYXdCLFlBQVlLLEdBQ3pCN0IsYUFBYXdCLFlBQVlJLEtBRXpCNUIsYUFBYXdCLFlBQVlLLEdBQ3pCN0IsYUFBYXdCLFlBQVlJLElBeUJqQyxTQUFTTSxnQkFBZ0IzQixHQUNyQixJQUFJVSxFQUFJLEVBQ0ZrQixFQUFVNUIsRUFBS1ksUUFDZmlCLEVBQVc1QixjQUFjLE1BQ2ZBLGNBQWMsT0FFOUIyQixFQUFRZixLQUFJLFNBQVVDLEdBQ2xCZ0IsUUFBUUMsSUFBSWpCLEdBQ1osSUFBSWtCLEVBQWEvQixjQUFjLE1BQy9CK0IsRUFBVzNCLGFBQWEsWUFBYVMsRUFBSSxLQUN6Q2tCLEVBQVczQixhQUFhLFVBQVdLLEtBQ25Dc0IsRUFBV2hCLFlBQWNGLEVBQUksTUFDN0JlLEVBQVNaLFlBQVllLE1BR3pCeEMsZUFBZXlCLFlBQVlZLEdBdEcvQnpDLFdBQVc2QyxpQkFBaUIsU0FBUyxXQUVkdkMsY0FEUCxnQ0FFREcsTUFBSyxTQUFBRyxHQUFJLE9BQUlTLGlCQUFpQlQsU0FvQjdDUixlQUFleUMsaUJBQWlCLFNBQVMsU0FBVUMsR0FDL0MsSUFBTWYsRUFBU2UsRUFBRWYsT0FFSXpCLGNBRFR5QixFQUFPTSxhQUFhLGdCQUduQjVCLE1BQUssU0FBQUcsR0FBSSxPQUFJa0IsdUJBQXVCbEIsRUFBS21CLFNBd0MxRDVCLFNBQVMwQyxpQkFBaUIsU0FBUSxXQUVadkMsY0FETiwrQkFFRkcsTUFBSyxTQUFBRyxHQUFJLE9BQUkyQixnQkFBZ0IzQixNQUN2QzhCLFFBQVFDLElBQUl2QyxlQUFlRixjQUFjLGlCQUVVLE1BQWhERSxlQUFlRixjQUFjLGlCQUM2QixNQUF6REcsYUFBYUgsY0FBYyw0QkFDM0JnQixjQUFjLGdCQUNkQSxjQUFjLDJCQUNkQSxjQUFjLGlCQUV3QyxNQUFoRGQsZUFBZUYsY0FBYyxpQkFDbkNnQixjQUFjIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1lbnVQZW9wbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yX3Blb3BsZScpO1xyXG5jb25zdCBtZW51RmlsbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JfZmlsbXMnKTtcclxuY29uc3QgY29udGFpbmVySXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyX19pdGVtcycpO1xyXG5jb25zdCBzaW5nbGVQZW9wbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGVvcGxlX2luZm8nKTtcclxuXHJcblxyXG4vL0Nvbm5lY3Rpb25cclxuZnVuY3Rpb24gY29ubmVjdGlvbkFQSSh1cmwpIHtcclxuICAgIHJldHVybiBmZXRjaCh1cmwpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhXHJcbiAgICAgICAgfSlcclxufVxyXG5cclxuLy9DcmVhdGUgRWxlbWVudFxyXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50IChlbGVtdCwgY2xhc3NFbGVtZW50ICl7XHJcbiAgICBsZXQgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbXQpO1xyXG4gICAgaWYoY2xhc3NFbGVtZW50KXtcclxuICAgICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjbGFzc0VsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XHJcbn1cclxuLy9yZW1vdmUgRWxlbWVudFxyXG5mdW5jdGlvbiByZW1vdmVFbGVtZW50IChlbGVtKXtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbSkucmVtb3ZlKCk7XHJcbn1cclxuXHJcbm1lbnVQZW9wbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCB1cmwgPSBcImh0dHBzOi8vc3dhcGkuY28vYXBpL3Blb3BsZS9cIlxyXG4gICAgY29uc3QgcGVvcGxlSlNPTiA9IGNvbm5lY3Rpb25BUEkodXJsKTtcclxuICAgIHBlb3BsZUpTT04udGhlbihkYXRhID0+IGNyZWF0ZUxpc3RQZW9wbGUoZGF0YSkpXHJcbn0pXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMaXN0UGVvcGxlKGRhdGEpIHtcclxuICAgIGxldCBpID0gMTtcclxuICAgIGNvbnN0IGxpc3RQZW9wbGVDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgbGlzdFBlb3BsZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnbGlzdC1wZW9wbGUnKTtcclxuXHJcbiAgICBkYXRhLnJlc3VsdHMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIGxldCBsaXN0UGVvcGxlID0gY3JlYXRlRWxlbWVudCgnbGknKVxyXG4gICAgICAgICAgICBsaXN0UGVvcGxlLnNldEF0dHJpYnV0ZSgnZGF0YS1wZW9wbGUnLCBpdGVtWyd1cmwnXSlcclxuICAgICAgICAgICAgbGlzdFBlb3BsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpKyspXHJcbiAgICAgICAgICAgIGxpc3RQZW9wbGUudGV4dENvbnRlbnQgPSBpdGVtWyduYW1lJ107XHJcbiAgICAgICAgICAgIGxpc3RQZW9wbGVDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdFBlb3BsZSlcclxuICAgICAgICB9XHJcbiAgICApXHJcbiAgICBjb250YWluZXJJdGVtcy5hcHBlbmRDaGlsZChsaXN0UGVvcGxlQ29udGFpbmVyKTtcclxufVxyXG5cclxuXHJcbmNvbnRhaW5lckl0ZW1zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgY29uc3QgdXJsID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1wZW9wbGUnKTtcclxuICAgIGNvbnN0IHNpbmdsZVBlb3BsZSA9IGNvbm5lY3Rpb25BUEkodXJsKTtcclxuXHJcbiAgICBzaW5nbGVQZW9wbGUudGhlbihkYXRhID0+IGNyZWF0ZVNpbmdsZVBlb3BsZUluZm8oZGF0YSx0YXJnZXQpKVxyXG5cclxuXHJcbn0pXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTaW5nbGVQZW9wbGVJbmZvKGRhdGEsdGFyZ2V0KSB7XHJcbiAgICBjb25zdCBwZW9wbGVBcnIgPSBkYXRhO1xyXG4gICAgY29uc3QgU2luZ2xlUGVvcGxlSW5mbyA9IGNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBjb25zdCBpbWdQZW9wbGUgPSBjcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuXHJcbiAgICBsZXQgaW5kZXggPSAxO1xyXG5cclxuICAgIFNpbmdsZVBlb3BsZUluZm8uc2V0QXR0cmlidXRlKCdjbGFzcycsICdwZW9wbGVfX2luZm8tY29udGFpbmVyJyk7XHJcbiAgICBpbWdQZW9wbGUuc2V0QXR0cmlidXRlKCdzcmMnLCAnaHR0cHM6Ly9zdGFyd2Fycy12aXN1YWxndWlkZS5jb20vYXNzZXRzL2ltZy9jaGFyYWN0ZXJzLycrdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKycuanBnJyk7XHJcblxyXG4gICAgZm9yKGxldCBrZXkgaW4gcGVvcGxlQXJyKXtcclxuXHJcbiAgICAgICAgaWYoaW5kZXggPD0gOCl7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBTaW5nbGVQZW9wbGVBdHRyID0gY3JlYXRlRWxlbWVudCgnbGknKVxyXG4gICAgICAgICAgICBTaW5nbGVQZW9wbGVBdHRyLnRleHRDb250ZW50ID0ga2V5ICsgJyB8ICcgKyBwZW9wbGVBcnJba2V5XTtcclxuXHJcbiAgICAgICAgICAgIFNpbmdsZVBlb3BsZUluZm8uYXBwZW5kQ2hpbGQoU2luZ2xlUGVvcGxlQXR0cik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGluZGV4KytcclxuICAgIH1cclxuXHJcbiAgICBpZihzaW5nbGVQZW9wbGUucXVlcnlTZWxlY3RvcignLnBlb3BsZV9faW5mby1jb250YWluZXInKSAhPSBudWxsKXtcclxuICAgICAgICByZW1vdmVFbGVtZW50KCcucGVvcGxlX19pbmZvLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIHJlbW92ZUVsZW1lbnQoJy5mb3RvLXBlb3BsZScpO1xyXG4gICAgICAgIHNpbmdsZVBlb3BsZS5hcHBlbmRDaGlsZChpbWdQZW9wbGUpO1xyXG4gICAgICAgIHNpbmdsZVBlb3BsZS5hcHBlbmRDaGlsZChTaW5nbGVQZW9wbGVJbmZvKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2luZ2xlUGVvcGxlLmFwcGVuZENoaWxkKGltZ1Blb3BsZSk7XHJcbiAgICAgICAgc2luZ2xlUGVvcGxlLmFwcGVuZENoaWxkKFNpbmdsZVBlb3BsZUluZm8pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbm1lbnVGaWxtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgdXJsID0gXCJodHRwczovL3N3YXBpLmNvL2FwaS9maWxtcy9cIlxyXG4gICAgY29uc3QgZmlsbXNKU09OID0gY29ubmVjdGlvbkFQSSh1cmwpO1xyXG4gICAgZmlsbXNKU09OLnRoZW4oZGF0YSA9PiBjcmVhdGVMaXN0RmlsbXMoZGF0YSkpXHJcbiAgICBjb25zb2xlLmxvZyhjb250YWluZXJJdGVtcy5xdWVyeVNlbGVjdG9yKCcubGlzdC1wZW9wbGUnKSlcclxuXHJcbiAgICBpZihjb250YWluZXJJdGVtcy5xdWVyeVNlbGVjdG9yKCcubGlzdC1wZW9wbGUnKSAhPSBudWxsIHx8XHJcbiAgICAgICAgc2luZ2xlUGVvcGxlLnF1ZXJ5U2VsZWN0b3IoJy5wZW9wbGVfX2luZm8tY29udGFpbmVyJykgIT0gbnVsbCl7XHJcbiAgICAgICAgcmVtb3ZlRWxlbWVudCgnLmxpc3QtcGVvcGxlJyk7XHJcbiAgICAgICAgcmVtb3ZlRWxlbWVudCgnLnBlb3BsZV9faW5mby1jb250YWluZXInKTtcclxuICAgICAgICByZW1vdmVFbGVtZW50KCcuZm90by1wZW9wbGUnKTtcclxuXHJcbiAgICB9IGVsc2UgaWYoY29udGFpbmVySXRlbXMucXVlcnlTZWxlY3RvcignLmxpc3QtcGVvcGxlJykgIT0gbnVsbCl7XHJcbiAgICAgICAgcmVtb3ZlRWxlbWVudCgnLmxpc3QtcGVvcGxlJyk7XHJcbiAgICB9XHJcblxyXG59KVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpc3RGaWxtcyhkYXRhKSB7XHJcbiAgICBsZXQgaSA9IDA7XHJcbiAgICBjb25zdCBmaWxtQXJyID0gZGF0YS5yZXN1bHRzXHJcbiAgICBjb25zdCBsaXN0RmlsbSA9IGNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBjb25zdCBpbWdGaWxtID0gY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcblxyXG4gICAgZmlsbUFyci5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhpdGVtKTtcclxuICAgICAgICBsZXQgc2luZ2xlRmlsbSA9IGNyZWF0ZUVsZW1lbnQoJ2xpJylcclxuICAgICAgICBzaW5nbGVGaWxtLnNldEF0dHJpYnV0ZSgnZGF0YS1maWxtJywgaXRlbVsndXJsJ10pXHJcbiAgICAgICAgc2luZ2xlRmlsbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpKyspXHJcbiAgICAgICAgc2luZ2xlRmlsbS50ZXh0Q29udGVudCA9IGl0ZW1bJ3RpdGxlJ107XHJcbiAgICAgICAgbGlzdEZpbG0uYXBwZW5kQ2hpbGQoc2luZ2xlRmlsbSlcclxuICAgICAgICB9XHJcbiAgICApXHJcbiAgICBjb250YWluZXJJdGVtcy5hcHBlbmRDaGlsZChsaXN0RmlsbSlcclxufSJdfQ==
