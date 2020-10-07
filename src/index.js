//Импорт внешних компонентов
import menuItems from "./menu.json";
import menuItemsTemplate from "./menu-item-card.hbs";

//Подключаем элементы DOM
const menuListEl = document.querySelector(".js-menu");

//Функция добавления разметки меню
function createMenuItemsMarkup(items) {
  return items.map(menuItemsTemplate).join("");
}

menuListEl.innerHTML = createMenuItemsMarkup(menuItems);
