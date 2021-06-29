// const searchEl = document.querySelector('.search');
// const searchInputEl = searchEl.querySelector('input');

// searchEl.addEventListener('click', function() {
//   searchInputEl.focus();
// });

// searchInputEl.addEventListener('focus', function(){
//   searchEl.classList.add('focused');
//   searchInputEl.setAttribute('placeholder','통합검색');
// });

// searchInputEl.addEventListener('blur', function(){
//   searchEl.classList.remove('focused');
//   searchInputEl.setAttribute('placeholder','');
// });


const searchEl = document.querySelector('input');
const searchBarEl = document.querySelector('.search_bar');


searchEl.addEventListener('click',function(){
    searchBarEl.focus();
});

searchBarEl.addEventListener('click', function () {
    searchEl.classList.add('show');
});

searchBarEl.addEventListener('blur',function () {
    searchEl.classList.remove('show');
});