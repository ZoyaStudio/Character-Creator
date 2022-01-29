import React from 'react'

const CategoryMenus = function CategoryMenus({
    currentType,
    setCurrentType,
}: {
    currentType: string
    setCurrentType: React.Dispatch<React.SetStateAction<string>>
}): JSX.Element {
    return (
        <div className="category-menu">
            <div className="menu">
                {['top', 'bottom', 'body'].map((type) => (
                    <button
                        type="button"
                        key={`${type}-menu-button`}
                        className={
                            currentType === type
                                ? 'selected menu-button'
                                : 'menu-button'
                        }
                        onClick={() => setCurrentType(type)}
                    >
                        {type[0].toUpperCase() + type.substring(1)}
                    </button>
                ))}
            </div>
        </div>
    )
}
export default CategoryMenus
