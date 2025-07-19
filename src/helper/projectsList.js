import project01 from "./../img/projects/01.jpg";
import project02 from "./../img/projects/02.jpg";
import project03 from "./../img/projects/03.jpg";
import project04 from "./../img/projects/04.jpg";
import project05 from "./../img/projects/05.jpg";
import project06 from "./../img/projects/06.jpg";

import project01Big from "./../img/projects/01-big.jpg";
import project02Big from "./../img/projects/02-big.jpg";
import project03Big from "./../img/projects/03-big.jpg";
import project04Big from "./../img/projects/04-big.jpg";
import project05Big from "./../img/projects/05-big.jpg";
import project06Big from "./../img/projects/06-big.jpg";

const projects = [
  {
    id: '01',
    title: 'Coffe Shop',
    description:'Веб-приложение интернет-магазина кофе с корзиной покупок, слайдерами для просмотра товаров и адаптивным дизайном.',
    skills: 'HTML5, CSS Modules, JavaScript, React, IntersectionObserver, Swiper, Adaptive, Animation' ,
    img: project01,
    imgBig: project01Big,
    gitHublink: 'https://github.com/Marina4427/CoffeShop-revo',
  },
  {
    id: '02',
    title: 'Landing Company Website',
    description:'Этот проект представляет собой веб-сайт компании, разработанный с использованием React и других современных технологий. Сайт включает в себя несколько страниц, реализованы главная страница (Home), страница о компании (About Us), контакты (Help).',
    skills: 'HTML, CSS, JavaScript, Webpack, Swiper.js, YouTube Iframe API',
    img: project02,
    imgBig: project02Big,
  },
  {id: '03',
    title: 'News Aggregator',
    description:'Это веб-приложение, агрегирующее новости с новостного сервера. Пользователь может просматривать последние новости, а также отсортировать по категориям.',
    skills: 'React, React-Router-Dom, React Query, Redux Toolkit',
    img: project03,
    imgBig: project03Big,
    gitHublink: 'https://github.com/Marina4427/news',
  },
  {id: '04',
    title: 'Burger ordering service',
    description:'Stellar Burgers - это веб-приложение для заказа бургеров. Пользователи могут просматривать список ингредиентов, добавлять их в свой бургер, перетаскивать для изменения порядка и оформлять заказ, просматривать свой профиль и ленту заказов, статус заказов.',
    skills: 'TypeScript, React, Redux, React-Router-Dom',
    img: project04,
    imgBig: project04Big,
    gitHublink: 'https://github.com/Marina4427/stellar-burgers',
  },  
  {id: '05',
    title: 'Социальная сеть',
    description:'Функциональная социальная сеть с возможностью регистрации, добавления друзей, публикации постов с эмодзи и загрузкой фото. Интерфейс поддерживает локализацию и сохраняет состояние сессии между перезапусками.',
    skills: 'React, Node.js, Chakra UI, Redux + Redux Toolkit + redux-persist, i18n, emoji, timeago.js, SCSS, json-server-auth + Express',
    img: project05,
    imgBig: project05Big,
    gitHublink: 'https://github.com/Marina4427/socialNetwork',
  },
  {
    id: '06',
    title: 'Spend Money',
    description:'Интерактивное одностраничное приложение, вдохновлённое neal.fun/spend, с расширенным функционалом: регистрация, авторизация, корзина и симуляция крупных трат.',
    skills: 'React + Redux Toolkit, React Router, React Hook Form, Axios, LocalStorage, json-server-auth, json-server',
    img: project06,
    imgBig: project06Big,
    gitHublink: 'https://github.com/Marina4427/spendMoney',
  }
];

export { projects };



