import React from "react";

// menu selection - allows user to select what part of the character they want to modify
// TO DO: replace current sections with "hair, body, top, head, hands, bottom, feet, back, one piece"
// TO DO: Add functionality to buttons
const CategoryMenus = function categoryMenus({ currentType, setCurrentType }) {
  return (
    <div className="category-menu">
      <div className="menu">
        {[/* 'body', */ "top", "bottom" /* 'one piece', 'accessories' */].map(
          (type) => (
            <button
              type="button"
              key={`${type}-menu-button`}
              className={
                currentType === type ? "selected menu-button" : "menu-button"
              }
              onClick={() => setCurrentType(type)}
            >
              {type[0].toUpperCase() + type.substring(1)}
            </button>
          )
        )}
      </div>
    </div>
  );
};
export default CategoryMenus;
