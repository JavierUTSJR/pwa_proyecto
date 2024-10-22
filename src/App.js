import React, { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Consumir la API de productos
    fetch('https://api.ejemplo.com/productos')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.log("Error al cargar los productos", error));
  }, []);

  return (
    <div className="container">
      <h1>Tienda en Línea</h1>
      <div className="productos">
        {products.map(product => (
          <div key={product.id} className="producto">
            <h3>{product.nombre}</h3>
            <p>Precio: ${product.precio}</p>
            <button>Comprar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
