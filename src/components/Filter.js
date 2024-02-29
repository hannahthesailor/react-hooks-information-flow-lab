import React from "react";

const Filter = ({ onCategoryChange }) => {
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    onCategoryChange(selectedCategory);
  };

  return (
    <div>
      <label htmlFor="category">Filter by Category:</label>
      <select id="category" onChange={handleCategoryChange}>
        <option value="">All</option>
        <option value="food">Food</option>
        <option value="clothing">Clothing</option>
        {/* Add more options as needed */}
      </select>
    </div>
  );
};

export default Filter;
