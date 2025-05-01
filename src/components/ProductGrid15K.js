import React from 'react'
import './ProductGrid15K.css'
import product1 from '../pictures/Blue Razz Ice.png'; // Replace with your image paths
import product2 from '../pictures/Blueberry Ice.png';
import product3 from '../pictures/Grape Ice.png';
import product4 from '../pictures/Green Apple Ice.png';
import product5 from '../pictures/Peach Ice.png';
import product6 from '../pictures/Spearmint Lychee.png';
import product7 from '../pictures/Strawberry Guava.png';
import product8 from '../pictures/Strawberry Ice.png';
import product9 from '../pictures/Strawberry Kiwi Ice.png';
import product10 from '../pictures/Strawberry Watermelon Ice.png';
import product11 from '../pictures/Triple Berry.png';
import product12 from '../pictures/Watermelon Ice.png';

function ProductGrid15K() {
  const products = [
      { id: 1, name: 'Blue Razz Ice', description: 'Electric blue raspberry flavor with a thrilling icy exhale. Sweet, tart, and undeniably cool.', price: 'R 200.00, (with device R 400.00)', image: product1 },
      { id: 2, name: 'Blueberry Ice', description: 'The sweet and slightly tangy taste of ripe blueberries, finished with a crisp and invigorating chill.', price: 'R 200.00, (with device R 400.00)', image: product2 },
      { id: 3, name: 'Grape Ice', description: 'Juicy and sweet grape flavor enhanced by a refreshing wave of icy coolness. A frosty fruit sensation.', price: 'R 200.00, (with device R 400.00)', image: product3 },
      { id: 4, name: 'Green Apple Ice', description: 'The crisp and slightly sour bite of green apple, followed by a revitalizing icy blast. A zesty and cool vape.', price: 'R 200.00, (with device R 400.00)', image: product4 },
      { id: 5, name: 'Peach Ice', description: 'The succulent sweetness of ripe peaches, perfectly complemented by a smooth and frosty finish.', price: 'R 200.00, (with device R 400.00)', image: product5 },
      { id: 6, name: 'Spearmint Lychee', description: ' A unique and refreshing blend of cool, crisp spearmint and the sweet, floral notes of exotic lychee.', price: 'R 200.00, (with device R 400.00)', image: product6 },
      { id: 7, name: 'Strawberry Guava', description: 'A tropical fusion of sweet, sun-ripened strawberries and the subtly tangy, aromatic flavor of guava.', price: 'R 200.00, (with device R 400.00)', image: product7 },
      { id: 8, name: 'Strawberry Ice', description: 'The classic sweet taste of fresh strawberries, intensified with a frosty and exhilarating chill.', price: 'R 200.00, (with device R 400.00)', image: product8 },
      { id: 9, name: 'Strawberry Kiwi Ice', description: 'A delightful combination of sweet strawberries and tangy kiwi, finished with a cool and icy exhale.', price: 'R 200.00, (with device R 400.00)', image: product9 },
      { id: 10, name: 'Strawberry Watermelon Ice', description: 'The juicy sweetness of strawberry and the refreshing crispness of watermelon, all with a cool and invigorating icy touch.', price: 'R 200.00, (with device R 400.00)', image: product10 },
      { id: 11, name: 'Triple Berry', description: 'A powerful blend of three delicious berries, bursting with sweet and tart notes for a complex and satisfying vape.', price: 'R 200.00, (with device R 400.00)', image: product11 },
      { id: 12, name: 'Watermelon Ice', description: 'The ultimate thirst-quencher! Sweet and juicy watermelon flavor with a revitalizing icy exhale.', price: 'R 200.00, (with device R 400.00)', image: product12 },

    ];

    return (
        <section className="product-grid-section">
          <h2>15K PUFFS CATRIDGES FLAVOUR</h2> {/* Optional heading */}
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

export default ProductGrid15K