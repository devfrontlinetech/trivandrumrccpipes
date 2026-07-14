import React, { useState } from "react";
import { FaStar, FaWhatsapp } from "react-icons/fa";
import { productData } from "../data/product-data";
import "../../assets/css/elements/product.css";

const Products = () => {
  const INITIAL_PRODUCTS = 8;
  const LOAD_COUNT = 4;

  const [visible, setVisible] = useState(INITIAL_PRODUCTS);

  const whatsappNumber = "919486544451";

  const displayedProducts = productData.slice(0, visible);

  const handleLoadMore = () => {
    setVisible((prev) => Math.min(prev + LOAD_COUNT, productData.length));
  };

  return (
    <section id="products" className="product-container">
      <div className="product-title">
        <span>Our Products</span>
        <h2>Trending RCC Concrete Pipes</h2>
        <p>
          Premium RCC Concrete Pipes for drainage, irrigation, sewerage and
          infrastructure projects.
        </p>
      </div>

      <div className="product-grid">
        {displayedProducts.length > 0 ? (
          displayedProducts.map((item) => {
            const message = `Hello, I'm interested in ${item.name}

Size: ${item.size}

Price: ${item.price}

Please send me more details.`;

            return (
              <div
                className="product-card"
                key={item.id}
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <img src={item.image} alt={item.name} />

                <div className="product-content">
                  <div className="rating">
                    {Array.from({ length: item.rating }).map((_, index) => (
                      <FaStar key={index} />
                    ))}
                  </div>

                  <h3>{item.name}</h3>

                  <p>{item.size}</p>

                  <h4>{item.price}</h4>

                  <div className="product-buttons">
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                        message,
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="whatsapp-btn"
                    >
                      <FaWhatsapp />
                      Ask Now
                    </a>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="no-products">
            <h3>No products available.</h3>
          </div>
        )}
      </div>

      {productData.length > INITIAL_PRODUCTS &&
        visible < productData.length && (
          <div className="load-more">
            <button onClick={handleLoadMore}>Load More Products</button>
          </div>
        )}

      <div className="product-count">
        Showing {displayedProducts.length} of {productData.length} Products
      </div>
    </section>
  );
};

export default Products;
