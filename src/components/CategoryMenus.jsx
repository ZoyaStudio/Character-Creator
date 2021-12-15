import React from 'react';

// menu selection - allows user to select what part of the character they want to modify

const CategoryMenus = function CategoryMenus({ currentType, setCurrentType }) {
  return (
    <div className="category-menu">
      <div className="menu">
        {['top', 'bottom'].map(
          (type) => (
            <button
              type="button"
              key={`${type}-menu-button`}
              className={
                currentType === type ? 'selected menu-button' : 'menu-button'
              }
              onClick={() => setCurrentType(type)}
            >
              {type[0].toUpperCase() + type.substring(1)}
            </button>
          ),
        )}
      </div>
    </div>
  );
};
export default CategoryMenus;
