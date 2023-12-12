import {menu} from "./object.js";

const centerCection = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container')

window.addEventListener('DOMContentLoaded', () => {

  displayMenuItems(menu);

  displayMenuButtons();

});

// filter item

function displayMenuItems(menuItem) {
  let displayMenu = menuItem.map((item) => {
    return `<article class="menu-item">
      <img src=${item.img} alt=${item.title} class="photo">
      <div class="item-info">
        <header>
          <h4>${item.title}</h4>
          <h4 class="price">$${item.price}</h4>
        </header>
        <p class="item-text">${item.desc}</p>
      </div>
    </article>`

  });
  displayMenu = displayMenu.join('');

  centerCection.innerHTML = displayMenu;
};

const displayMenuButtons = () => {
  const categories = menu.reduce((values, item) => {
    if(!values.includes(item.category)) {
      values.push(item.category);
    };
    return values;
  },["all"]);

  const categoryBtns = categories.map((category) => {
    return `<button class="filter-btn" data-id=${category} type="button" >${category}</button>`
  }).join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll('.filter-btn'); 

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', function (e) {
      const category = e.currentTarget.dataset.id;
      
       const menuCategory = menu.filter((menuItem) => {
        if(menuItem.category === category) {
          return menuItem;
        };
       });
      //  console.log(menuCategory);
      if(category === 'all'){
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });  
  });
};