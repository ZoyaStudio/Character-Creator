import React, {useState, useContext} from 'react';

//menu selection - allows user to select what part of the character they want to modify
//TO DO: replace current sections with "hair, body, top, head, hands, bottom, feet, back, one piece"
//TO DO: Add functionality to buttons
function CategoryMenus() {
  return (
    <div className="category-menus">
      <div className="menu">
      <button>Hair</button>
      <button>Body</button>
      <button className="selected">Clothing</button>
      </div>
      <div className="menu">
        <button>Collar</button>
        <button className="selected">Top</button>
        <button>Sleeves</button>
        <button>Hat</button>
      </div>

    </div>
  )
}
export default CategoryMenus;