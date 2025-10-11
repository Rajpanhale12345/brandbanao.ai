import React from 'react';
import './Products.css';
import { Link } from 'react-router-dom';

const Products = ({ title, subtitle, image, bold, text1, text2, text3, text4, text5, text6, cta }) => {
  return (
    <div className="products-container">
      <div className="products-hero">
        <div className="products-text"><br /><br />
          <h1 style={{textAlign : "center", color : "#d94f5c"}}>{title}</h1>
          <p style={{textAlign : "center"}}>{subtitle}</p>
        </div><br /><br />
        {image && (
          <div className="products-image" style={{margin: "0 auto", display:"flex", justifyContent : "center", alignItems : "center", height : "200px", width : "200px"}}>
            <img src={image} alt="Branding Visual" style={{borderRadius : "40px", height : "300px", width : "300px"}} />
          </div>
        )}
      </div><br /><br />

      <div className="products-list">
        <div className="products-item" style={{textAlign : "center", fontSize : "30px",}}>
          <b >{bold}</b>
        </div>
        <div className="products-item">
          <p style={{textAlign : "center"}}>{text1}</p>
        </div>
        <div className="products-item">
          <p style={{textAlign : "center"}}>{text2}</p>
        </div>
        <div className="products-item">
          <p style={{textAlign : "center"}}>{text3}</p>
        </div>
        <div className="products-item">
          <p style={{textAlign : "center"}}>{text4}</p>
        </div>
        <div className="products-item">
          <p style={{textAlign : "center"}}>{text5}</p>
        </div>
        <div className="products-item">
          <p style={{textAlign : "center"}}>{text6}</p>
        </div>
        <div className="products-item">
          <h3 style={{textAlign : "center"}}>{cta}</h3>
        </div>
        <div className='button' style={{display : "flex", justifyContent : "center", alignItems : "center", }}>
       <Link to = "/contact"> <button type='button'  style={{backgroundColor : "#d94f5c"}}>Enquire now</button></Link></div>
      </div>
    </div>
  );
};

export default Products;
