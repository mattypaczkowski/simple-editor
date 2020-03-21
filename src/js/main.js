"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


const load = document.querySelector('.button__load');

const save = document.querySelector('.button__save');
 
const board = document.querySelector('.board')

if (localStorage.getItem('board')) {
  board.value = localStorage.getItem('board')
}

board.addEventListener('keyup', (e) => {
  localStorage.setItem('board',e.target.value)
});