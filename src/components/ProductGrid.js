// src/components/ProductGrid.js
import React from 'react';
import './ProductGrid.css'; // Create ProductGrid.css
import product1 from '../pictures/Creamy Tobacco.png'; // Replace with your image paths
import product2 from '../pictures/Grape.png';
import product3 from '../pictures/Mineral.png';
import product4 from '../pictures/Mixed Berries.png';
import product5 from '../pictures/Strawberry.png';
import product6 from '../pictures/Watermelon.png';

function ProductGrid() {
  const products = [
    { id: 1, name: 'Creamy Tobacco', description: 'Smooth and rich tobacco notes swirled with a velvety cream finish. A sophisticated and comforting classic.', price: 'R 350.00', image: product1 },
    { id: 2, name: 'Grape', description: 'Bursting with the sweet and slightly tart taste of juicy, sun-ripened grapes. A refreshing and fruity all-day vape.', price: 'R 350.00', image: product2 },
    { id: 3, name: 'Mineral', description: 'An intriguing and unique flavor profile with subtle earthy and slightly savory undertones. For those seeking something different and complex.', price: 'R 350.00', image: product3 },
    { id: 4, name: 'Mixed Berries', description: 'A vibrant blend of sweet and tangy forest fruits. A delightful medley of strawberries, blueberries, raspberries, and more.', price: 'R 350.00', image: product4 },
    { id: 5, name: 'Strawberry', description: 'The pure, sweet, and juicy taste of freshly picked strawberries. A simple yet irresistible fruity delight.', price: 'R 350.00', image: product5 },
    { id: 6, name: 'Watermelon', description: 'Crisp, cool, and incredibly refreshing, capturing the juicy sweetness of summer watermelon. Perfect for a light and invigorating vape.', price: 'R 350.00', image: product6 },
  ];

  return (
    <section className="product-grid-section" id='6KPuffs'>
      <h2>OUR PRODUCTS</h2>
      <h2>6K PUFFS RANGE</h2> {/* Optional heading */}
      <div className="product-grid-container">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="description">{product.description}</p>
              <p className="price">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;