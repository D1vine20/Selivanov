// Анимация Full Scroll Page
$(document).ready(function(){
    $(".main").onepage_scroll({
      sectionContainer: "section",
      responsiveFallback: 600,
      loop: true,
      pagination: false,
      animationTime: 800,
    });
});

// Анимация текста №1
let typed = new Typed('#typed', { // Тут id того блока, в которм будет анимация
    stringsElement: '#typed-strings', // Тут id блока из которого берем строки для анимации
    typeSpeed: 90, // Скорость печати
    startDelay: 500, // Задержка перед стартом анимации
    backSpeed: 70, // Скорость удаления
    loop: false, // Указываем, повторять ли анимацию
    showCursor: false
});
// Анимация  текста №2
let animtyped = new Typed('#typed_two', { // Тут id того блока, в которм будет анимация
    stringsElement: '#typed-strings_two', // Тут id блока из которого берем строки для анимации
    typeSpeed: 90, // Скорость печати
    startDelay: 12000, // Задержка перед стартом анимации
    backSpeed: 70, // Скорость удаления
    loop: false, // Указываем, повторять ли анимацию
    showCursor: false
});
// Анимация появления кнопки
function helloBtn() {
    document.getElementById("hello__btn").style.opacity = "1";
}
setTimeout(helloBtn, 22000);

// Вызов почты
function alertMessage() {
    alert("Электронная почта: webselivanov@gmail.com");
}

// Слайдер
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
};

// Burger
const headerMenu = document.querySelector('.header-menu');
const headerMenuIcon = document.querySelector('.header-menu__icon');
const mobile = document.querySelector('.mobile');

headerMenu.addEventListener('click', function() {
  headerMenuIcon.classList.toggle('active');
  mobile.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
  document.body.classList.toggle('body');
});
// доп. к бургеру
function noScroll() {
    headerMenuIcon.classList.toggle('active');
    mobile.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
    document.body.classList.toggle('body');
}
//