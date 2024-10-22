import React from 'react';
import '../styles/FeaturedProducts.css';

function FeaturedProducts() {
  const products = [
    { name: 'Detergente Líquido', price: '$50', image: '/images/detergente.jpg' },
    { name: 'Desinfectante Multiusos', price: '$70', image: '/images/desinfectante.jpg' },
    { name: 'Jabón Líquido', price: '$30', image: '/images/jabon.jpg' },
  ];

  return (
    <div className="featured-products" id="featured">
      <h2>Productos Destacados</h2>
      <div className="products-list">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
