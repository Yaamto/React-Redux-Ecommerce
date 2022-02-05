import React from 'react';
import heart from './heart.svg'
import  './Products.css'
import { Link } from 'react-router-dom';
import inventory from '../../data/inventory'
export default function Products() {
  return (
    <div className='container-products'>
    {
      inventory.map(item => (
        <Link to={{
            pathname: `/produits/${item.title.replace(/\s+/g, '').trim()}`,
            
        }}
        key={item.id}
        >

        <div className="bloc-card">
          <div className="product-card">
            <div className="visual-aspect">
            <img className="img-product" src={process.env.PUBLIC_URL + `/images/${item.img}.png`} alt="produits" />
            <div className="like-container">
              <img src={heart} alt="icône j'aime" />
            </div>
            </div>
            <div className="info">
            <p>{item.title}</p>
            <p>{item.price}€</p>
          </div>
         
          </div>

          <div className="back-card"></div>
        </div>
        </Link>
      ))
    }

    </div>
  );
}
