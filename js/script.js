"use strict"

const isMobile = {
   Android: function () {
      return navigator.userAgent.match(/Android/i);
   },
   BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
   },
   iOS: function (){
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
   },
   Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
   },
   Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
   },
   any: function () {
      return (
         isMobile.Android() ||
         isMobile.BlackBerry() ||
         isMobile.iOS() ||
         isMobile.Opera() ||
         isMobile.Windows());    
   }
};
const iconMenu = document.querySelector('.menu_icon');
const menuBody = document.querySelector('.header__menu');
if(iconMenu){
   
   iconMenu.addEventListener("click", function(e){
      document.body.classList.toggle('_lock')
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
})};

const arrowMenu = document.querySelector('.jacob_arrow');
const textBody = document.querySelector('.jacob__text');
if(arrowMenu ){
   
   arrowMenu .addEventListener("click", function(e){
      document.body.classList.toggle('_lock')
      arrowMenu .classList.toggle('_active');
      textBody.classList.toggle('_active');
})};