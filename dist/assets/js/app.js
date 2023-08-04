"use strict";

// //masked inputs
// $(() => {
//   Inputmask({"mask": "+7 (999) 999 - 99 - 99"}).mask('.phone-mask');
// });
//
// // tabs
// document.addEventListener('DOMContentLoaded', function () {
//   const tabsBtn = document.querySelectorAll('.tabs__btn');
//   tabsBtn.forEach(function (el) {
//     el.addEventListener('click', function (event) {
//       tabsBtn.forEach(tabsBtn => {
//         tabsBtn.classList.remove('is-active');
//       });
//       const path = event.currentTarget.dataset.path;
//       document.querySelectorAll('.tabs__content').forEach(function (tabContent) {
//         tabContent.classList.remove('is-active');
//       });
//       document.querySelector(`[data-target="${path}"]`).classList.add('is-active');
//       el.classList.add('is-active');
//     });
//   });
// });
//
//
// mobile menu
$(function () {
  var btnMenu = document.querySelectorAll('.js-open-mobile-menu');
  var menu = document.querySelector('.js-mobile-menu');
  var body = document.querySelector('body');
  btnMenu.forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.stopPropagation();
      menu.classList.add('is-open');
      body.classList.add('opened-menu');
    });
  });
  var closeBtn = document.querySelector('.js-close-mobile-menu');
  closeBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    menu.classList.remove('is-open');
    body.classList.remove('opened-menu');
  });
});

// sliders
$(function () {
  //hero-slider
  var swiperMess = new Swiper(".js-mess-slider", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    speed: 900,
    loop: true
  });
});

//fixed header
$(document).ready(function () {
  $(function () {
    var timer = null;
    window.addEventListener('scroll', function () {
      if (timer !== null) {
        var stickySidebar = function stickySidebar() {
          var scrollDistance = $(document).scrollTop(),
            headerHeight = $('.header').outerHeight(true),
            sidebarHeight = $('aside').outerHeight(true),
            footerOffsetTop = $('.js-stop-header').offset().top,
            $header = $('header'),
            $sidebar = $('aside');
          if (scrollDistance >= headerHeight - 85) {
            $header.addClass('is-fixed');
          } else {
            $header.removeClass('is-fixed');
          }
          if (scrollDistance + headerHeight >= footerOffsetTop) {
            $header.removeClass('is-fixed');
          }
          if (scrollDistance >= sidebarHeight - 300) {
            $sidebar.addClass('is-fixed');
          } else {
            $sidebar.removeClass('is-fixed');
          }
          if (scrollDistance + sidebarHeight >= footerOffsetTop) {
            $sidebar.removeClass('is-fixed');
          }
        };
        clearTimeout(timer);
        //document.querySelector('header').classList.add('out', 'is-fixed');
        stickySidebar();
        $(document).scroll(function () {
          stickySidebar();
        });
      }
      timer = setTimeout(function () {
        // document.querySelector('header').classList.remove('out');
      }, 800);
    }, false);
  });
});
$(function () {
  $(document).ready(function () {
    function checkWidth() {
      var windowWidth = $('body').innerWidth(),
        elem = $(".sidebar "); // лучше сохранять объект в переменную, многократно чтобы не насиловать
      // страницу для поиска нужного элемента
      if (windowWidth < 1025) {
        elem.removeClass('show');
        // elem.addClass('col-xs-4');
      } else {
        elem.addClass('show');
      }
    }
    checkWidth(); // проверит при загрузке страницы

    $(window).resize(function () {
      checkWidth(); // проверит при изменении размера окна клиента
    });
  });
});