import React from 'react';
import './Home.css'
import imgHomeShop from './shopimg.jpg'


export default function Home() {
  return (
    <div className='global-container'>
        <h1 className="home-title">
            Bienvenue au <span>Shop</span>
        </h1>
       
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor quae dignissimos 
            maiores atque ullam culpa sed maxime debitis veniam magnam omnis et quo reprehenderit
             voluptatum nulla eos, sunt placeat. Tenetur!</p>
             <img src={imgHomeShop} alt="imageshop" />
    </div>

  );
}
