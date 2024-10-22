import React from 'react';
import '../styles/Categories.css';

function Categories() {
  const categories = ['Detergentes', 'Desinfectantes', 'Escobas', 'Trapos', 'Jabones'];

  return (
    <div className="categories" id="categories">
      <h2>Categorías</h2>
      <div className="categories-list">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <img src={`/images/${category.toLowerCase()}.jpg`} alt={category} />
            <h3>{category}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
