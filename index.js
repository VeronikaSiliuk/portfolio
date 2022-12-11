console.log("1.Вёрстка соответствует макету. Ширина экрана 768px +48\n2.Не появляется горизонтальная полоса прокрутки+15\n3.при ширине страницы 768рх панель навигации скрывается, появляется бургер-иконка +2\n4.при нажатии на бургер-иконку справа плавно появляется адаптивное меню, бургер-иконка изменяется на крестик +4\n5.высота адаптивного меню занимает всю высоту экрана+2\n6.при нажатии на крестик адаптивное меню плавно скрывается уезжая за правую часть экрана, крестик превращается в бургер-иконку +4\n7.бургер-иконка, которая при клике превращается в крестик, создана при помощи css-анимаций без использования изображений +2\n8.ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +2\n9.при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, крестик превращается в бургер-иконку +4\n Итого 84");


// бургер
const hamburgerMenu = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav__menu');
const navLinks = document.querySelectorAll('.nav-link');
if(hamburgerMenu){
    
        hamburgerMenu.addEventListener("click", function(e){
            // чтоб странице нельзя было прокручивать при открытом бургере
            document.body.classList.toggle('_lock');
            hamburgerMenu.classList.toggle('_active');
            navMenu.classList.toggle('_active');
    });
};

// убрать меню при переходе по ссылке - 2 варианта
// navMenu.addEventListener('click', (ev) =>{
//     if (ev.target.classList.contains('nav-link')) {
//         hamburgerMenu.classList.remove('_active');
//         navMenu.classList.remove('_active'); 
//        }
//    });

navLinks.forEach((el) => el.addEventListener('click', closeMenu));
function closeMenu(e) {
    if (e.target.classList.contains('nav-link')) {
    hamburgerMenu.classList.remove('_active');
    navMenu.classList.remove('_active');
}
 };


 //СМЕНА ИЗОБРАЖЕНИЙ В ПОРТФОЛИО
 const portfolioBtns = document.querySelectorAll('.portfolio-btns');//переменная для 4 кнопок портфолио
 const portfolioBtn = document.querySelectorAll('.portfolio-btn');//переменная для 4 кнопок портфолио
 const portfolioImages = document.querySelectorAll('.portfolio-image');//переменная для 6 картинок портфолио

  portfolioBtns.forEach((el) => el.addEventListener('click', changeImage));//присвоили слушатель
  function changeImage(event){
    let a = event.target.dataset.season;//ссылка на объект-инициатор события
    if(event.target.classList.contains('portfolio-btn')) {//если объект на котором произошло событие содержит кнопку 
      portfolioImages.forEach((img, index) => img.src = `./assets/img/${a}/${index + 1}.jpg`);
      portfolioBtn.forEach((button) => button.classList.remove('_active'));
      event.target.classList.toggle('_active');
    }
 };

//кеширование изображений -без кода в нетворк 304?
// const seasons = ['winter', 'spring', 'summer', 'autumn'];
// function preloadSummerImages() {
    
//     seasons.forEach((item)=>{
//     for(let i = 1; i <= 6; i++) {
//       const img = new Image();
//       img.src = `./assets/img/summer/${i}.jpg`;
//     }})
//   }
//   preloadSummerImages();


//ПЕРЕВОД ЯЗЫКА
const i18Obj = {
  'en': {
    'skills': 'Skills',
    'portfolio': 'Portfolio',
    'video': 'Video',
    'price': 'Price',
    'contacts': 'Contacts',
    'hero-title': 'Alexa Rise',
    'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
    'hire': 'Hire me',
    'skill-title-1': 'Digital photography',
    'skill-text-1': 'High-quality photos in the studio and on the nature',
    'skill-title-2': 'Video shooting',
    'skill-text-2': 'Capture your moments so that they always stay with you',
    'skill-title-3': 'Rotouch',
    'skill-text-3': 'I strive to make photography surpass reality',
    'skill-title-4': 'Audio',
    'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
    'winter': 'Winter',
    'spring': 'Spring',
    'summer': 'Summer',
    'autumn': 'Autumn',
    'price-description-1-span-1': 'One location',
    'price-description-1-span-2': '120 photos in color',
    'price-description-1-span-3': '12 photos in retouch',
    'price-description-1-span-4': 'Readiness 2-3 weeks',
    'price-description-1-span-5': 'Make up, visage',
    'price-description-2-span-1': 'One or two locations',
    'price-description-2-span-2': '200 photos in color',
    'price-description-2-span-3': '20 photos in retouch',
    'price-description-2-span-4': 'Readiness 1-2 weeks',
    'price-description-2-span-5': 'Make up, visage',
    'price-description-3-span-1': 'Three locations or more',
    'price-description-3-span-2': '300 photos in color',
    'price-description-3-span-3': '50 photos in retouch',
    'price-description-3-span-4': 'Readiness 1 week',
    'price-description-3-span-5': 'Make up, visage, hairstyle',
    'order': 'Order shooting',
    'contact-me': 'Contact me',
    'send-message': 'Send message'
  },
  'ru': {
    'skills': 'Навыки',
    'portfolio': 'Портфолио',
    'video': 'Видео',
    'price': 'Цены',
    'contacts': 'Контакты',
    'hero-title': 'Алекса Райс',
    'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
    'hire': 'Пригласить',
    'skill-title-1': 'Фотография',
    'skill-text-1': 'Высококачественные фото в студии и на природе',
    'skill-title-2': 'Видеосъемка',
    'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
    'skill-title-3': 'Ретушь',
    'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
    'skill-title-4': 'Звук',
    'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
    'winter': 'Зима',
    'spring': 'Весна',
    'summer': 'Лето',
    'autumn': 'Осень',
    'price-description-1-span-1': 'Одна локация',
    'price-description-1-span-2': '120 цветных фото',
    'price-description-1-span-3': '12 отретушированных фото',
    'price-description-1-span-4': 'Готовность через 2-3 недели',
    'price-description-1-span-5': 'Макияж, визаж',
    'price-description-2-span-1': 'Одна-две локации',
    'price-description-2-span-2': '200 цветных фото',
    'price-description-2-span-3': '20 отретушированных фото',
    'price-description-2-span-4': 'Готовность через 1-2 недели',
    'price-description-2-span-5': 'Макияж, визаж',
    'price-description-3-span-1': 'Три локации и больше',
    'price-description-3-span-2': '300 цветных фото',
    'price-description-3-span-3': '50 отретушированных фото',
    'price-description-3-span-4': 'Готовность через 1 неделю',
    'price-description-3-span-5': 'Макияж, визаж, прическа',
    'order': 'Заказать съемку',
    'contact-me': 'Свяжитесь со мной',
    'send-message': 'Отправить'
  }
}
//export default i18Obj; --при использовании js модулей

 const langEn = document.querySelector('.en');
 const langRu = document.querySelector('.ru');
 const vocabilary = document.querySelectorAll('[data-i18n]');

 langEn.addEventListener('click', changeLangEn);
 langRu.addEventListener('click', changeLangRu);

 function changeLangEn(event){
    langEn.classList.toggle('_active');
    langRu.classList.remove('_active');
    vocabilary.forEach((e)=>{
    e.textContent = i18Obj ['en'][e.dataset.i18n]; 
   })
   }
   
   function changeLangRu(event){ 
      langRu.classList.toggle('_active');
      langEn.classList.remove('_active'); 
      vocabilary.forEach((e)=>{
      e.textContent = i18Obj ['ru'][e.dataset.i18n];
    })
    }


//СМЕНА ТЕМЫ
const changeThemeBlocks = document.querySelectorAll(['.container', 'body', '.skills', '.skill', 'h4', '.about__skill', '.title-text', '.portfolio', '.video', '.price', 'h3', '.price-description']);
const theme=document.querySelector(".theme");

theme.addEventListener("click", function(e){
  changeThemeBlocks.forEach((el) => el.classList.toggle('light-theme'));
});

// local storage
let them = "light";
let lang = "en";

function setLocalStorage() {
  localStorage.setItem('lang', lang);
}
window.addEventListener('beforeunload', setLocalStorage)

// function getLocalStorage() {
//   if(localStorage.getItem('lang')) {
//     const lang = localStorage.getItem('lang');
//     getTranslate(lang);
//   }
// }
// window.addEventListener('load', getLocalStorage)

//window - объект окна браузера, с ним связана загрузка и перезагрузка страницы
//addEventListener - метод, который отлавливает событие элемента и выполняет переданную функцию
//localStorage.setItem - метод сохраняющий данные в localStorage. Два параметра метода: имя значения, которое сохраняется и само значение, которое сохраняется
//localStorage.getItem - метод получающий данные из localStorage. Параметр метода - имя, под которым сохраняется значение.


//ПЛЭЙ-ПАУЗА
const playBig=document.querySelector(".big_play");
const playSmall=document.querySelector(".small_play");
const pauseBtn=document.querySelector(".pause");
const player=document.querySelector(".video_player");

playBig.addEventListener('click', playd);
playSmall.addEventListener('click', playd);

function playd(){
   // player.currentTime = 0; при каждом запуске сначала
    player.play();
    player.playbackRate =1;
    volume.value="0.05";
    playBig.classList.toggle('_active');
    playSmall.classList.toggle('_active');
    pauseBtn.classList.toggle('_vie');
};



pauseBtn.addEventListener('click', paused);
function paused(){
    player.pause();
    playBig.classList.toggle('_active');
    playSmall.classList.toggle('_active');
    pauseBtn.classList.toggle('_vie');
};

//ПРОГРЕСС ВИДЕО
const progress=document.querySelector(".progress");
const progressCont=document.querySelector(".progress_container");
let curtTime=document.querySelector(".currenttime");
let durTime=document.querySelector(".duration");
const speedDown=document.querySelector(".speed-down");
const speedUp=document.querySelector(".speed-up");

player.addEventListener('timeupdate', upDateProgress)

function upDateProgress(e){
const{duration, currentTime} = e.target;
const progressPer = (currentTime / duration) *100;
progress.style.width =`${progressPer}%`;
//ВРЕМЯ
let min=Math.floor(player.currentTime/60);
let sec=Math.floor(player.currentTime%60);
let minD=Math.floor(player.duration/60);
let secD=Math.floor(player.duration%60);

curtTime.innerHTML = `${min}:${sec}`;
durTime.innerHTML = `${minD}:${secD}`;



//смена значка в конце видео
if(duration===currentTime){playBig.classList.toggle('_active');playSmall.classList.toggle('_active');  pauseBtn.classList.toggle('_vie');}
}

//перемотка
progressCont.addEventListener('click', videoRewind);
function videoRewind(){
    durationTime = player.durationTime;
    let w=this.offsetWidth;
    let o=event.offsetX;
    this.value=o/w*100;
    player.pause();
    player.currentTime = player.duration*(o/w);
    player.play();
}


//УСКОРЕНИЕ-ЗАМЕДЛЕНИЕ
speedDown.addEventListener('click', speedDownF);
speedUp.addEventListener('click', speedUpF);
function speedDownF(){
    player.play();
    player.playbackRate =0.1;
}
function speedUpF(){
    player.play();
    player.playbackRate =2.5;
}


// ВКЛ-ВЫКЛ ЗВУК
const muteVolume = document.querySelector(".mute_volume");
const muteBtn = document.querySelector(".mute_button");
const volume=document.querySelector(".volume");

volume.addEventListener('change', VolumeControl);

//ползунок 
function VolumeControl() {
    player.volume = volume.value;
    // player_slider.style.background =`${volume.value}%`;
    if (player.volume > 0) {
        muteBtn.classList.remove('_active');
        muteVolume.classList.remove('_active');
        }else {
        muteBtn.classList.add('_active');   
        muteVolume.classList.add('_active');
        }
      };
        
    muteVolume.addEventListener('click', VolumeOnOff);
    muteBtn.addEventListener('click', VolumeOnOff);
//нажатие кнопки звука
function VolumeOnOff(event){
    muteBtn.classList.toggle('_active');
    muteVolume.classList.toggle('_active');

    if(muteBtn.classList.contains('_active')){
        player.volume=0;
    }else{
        player.volume=volume.value;
    }
};