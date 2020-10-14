//Импорт внешних компонентов
import menuItems from "./menu.json";
import menuItemsTemplate from "./menu-item-card.hbs";

//Подключаем элементы DOM
const menuListEl = document.querySelector(".js-menu");
const switchThemeEl = document.querySelector('.theme-switch__control');
const switchCheckboxEl = document.querySelector('#theme-switch-toggle');
const bodyEl = document.querySelector('body');

//Константа с перечислением тем
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

//Функция добавления разметки меню
function createMenuItemsMarkup(items) {
  return items.map(menuItemsTemplate).join("");
}

menuListEl.innerHTML = createMenuItemsMarkup(menuItems);

//Функция изменения темы и запись в localStorage
function changeMainTheme(item) {
  if (item.target.checked) {
    bodyEl.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    bodyEl.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

switchThemeEl.addEventListener('change', changeMainTheme);

//Функция установки темы при загрузки страницы
function setMainTheme() {
  console.log(localStorage.getItem('theme'));

  if (localStorage.getItem('theme') === Theme.LIGHT) {
    bodyEl.classList.add(Theme.LIGHT);
  } else {
    bodyEl.classList.add(Theme.DARK);
    switchCheckboxEl.checked = true;
  }

}

setMainTheme();