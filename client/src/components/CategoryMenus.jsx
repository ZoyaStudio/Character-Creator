import React, {useState, useContext} from 'react';
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