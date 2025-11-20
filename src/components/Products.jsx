import React from 'react';
import './Products.css';
import { Link } from 'react-router-dom';

const Products = ({ title, subtitle, image, bold, text1, text2, text3, text4, text5, text6, cta }) => {
  const bullets = [text1, text2, text3, text4, text5, text6].filter(Boolean);

  return (
    <div className="products-container">
      <div className="products-hero">
        <div className="products-text">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>

        {image && (
          <div className="products-image">
            <img src={image} alt={title || 'Branding Visual'} />
          </div>
        )}
      </div>

      <div className="products-list">
        {bold && (
          <div className="products-item products-heading">
            <b>{bold}</b>
          </div>
        )}

        {bullets.map((text, i) => (
          <div className="products-item" key={i}>
            <p>{text}</p>
          </div>
        ))}

        {cta && (
          <div className="products-item">
            <h3>{cta}</h3>
          </div>
        )}

        <div className="button">
          <Link to="/contact">
            <button type="button">Enquire now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
