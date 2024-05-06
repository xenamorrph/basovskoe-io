"use strict";

document.addEventListener('DOMContentLoaded', function () {
  // console.log('скрипт ');
  // const submemu = document.querySelectorAll('.nav__container ul li ul');
  // console.log(submemu);
  // submemu.forEach((element) => {
  // })
  const nav = document.querySelector('.header__nav');
  const navToggle = document.querySelector('.header__nav-button');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      nav.classList.toggle('js-nav-toggle');
    })
  }
});