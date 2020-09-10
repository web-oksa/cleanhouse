$(document).ready(function () {
  $(".review__slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
        },
      },
      {
        breakpoint: 465,
        settings: {
          centerMode: false,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".form__form").submit(function () {
    // Событие отправки с формы
    let form_data = $(this).serialize(); // Собираем данные из полей
    $.ajax({
      type: "POST", // Метод отправки
      url: "sendform.php", // Путь к PHP обработчику sendform.php
      data: form_data,
      success: function () {
        $(".thank-popup").addClass("active"); // Открываем модальное окно
        $("body").toggleClass("no-scroll"); // Убираем скролл у модального окна
        $(".form__form").trigger("reset"); // Очищаем форму после отправки
      },
    });
    event.preventDefault(); // Отменяем стандартное поведение submit, чтобы страница не перезагружалась
  });
});

$(".thank-popup__close").click(function () {
  $(".thank-popup").removeClass("active"); // Закрываем модальное окно при нажатии на крестик
});

$(".thank-popup__overlay").click(function () {
  $(".thank-popup").removeClass("active"); // Закрываем модальное окно при нажатии мимо самого окна
});

// Маска ввода номера телефона (плагин maskedinput)
$(function ($) {
  $('[name="user_phone"]').mask("+7(999) 999-9999");
});

// Плавная прокрутка до якорей

const anchorse = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchorse) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    const blockID = anchor.getAttribute("href");
    document.querySelector("" + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

let btn = $(".footer__to-top");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});
