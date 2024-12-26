import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error(err));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <h1>🛍️ Product Explorer</h1>
      </header>

      {/* Search Section */}
      <div className="search-section">
        <h2>Find the Perfect Product</h2>
        <input
          type="text"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="card">
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p className="description">{product.description}</p>
            <p className="price">${product.price}</p>
            <button className="btn">View More</button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Product Explorer | Made with ❤️ </p>
      </footer>
    </div>
  );
};

export default App;
