import React, { useEffect } from "react";

const CATEGORY = "CATEGORY";

const CategoryFilter = ({ categories, category, setCategory }) => {
  const makeCategories = () => {
    if (category.length === 0) return;

    return categories.map((item, idx) => (
      <div
        key={idx}
        className={
          item.value === category ? "category-child selected" : "category-child"
        }
        onClick={() => {
          setCategory(item.value);
          localStorage.setItem(CATEGORY, item.value);
        }}
      >
        {item.name}
      </div>
    ));
  };

  const init = () => {
    let data = localStorage.getItem(CATEGORY);
    if (data !== null) setCategory(data);
  };

  useEffect(init, []);

  return (
    <div>
      <div className="categorySet">{makeCategories()}</div>
    </div>
  );
};

export default CategoryFilter;
