import React, {useState, useEffect} from 'react';
import "./ShoppingCart.css"
import { useSelector, useDispatch } from 'react-redux';
import Paiement from '../../Components/Paiement/Paiement';

export default function ShoppingCart() {

  const [visible, setVisible] = useState(false)

  const storeState = useSelector(state => state)

  const dispatch = useDispatch()

  const getPaiement = () => {
    setVisible(true)
    
  }

  const handleChange = (event, id) => {

    const indexItem = storeState.cart.findIndex(obj => obj.id === id)

    const objUpdated = {
      ...storeState.cart[indexItem],
      quantity: Number(event.target.value)

    }


    dispatch({
      type: "UPDATEITEM",
      payload: objUpdated
    })
  }


  let totalPrice = 0 


  if(storeState.cart.length !==0) {
    for(const item of storeState.cart){
      const itemPrice = item.price * item.quantity
      totalPrice += itemPrice
      

    }
  }


  return (
  <div className='global-container'>
    <p className="heading-cart">Votre panier: </p>
    <ul className="cart-list">
        {storeState.cart.map((item) =>(
          <li key={item.id}>
            <img src={process.env.PUBLIC_URL + `/images/${item.img}.png`} alt="" srcset="" />
            <div className="bloc-cart-infos">
              <h4>{item.title}</h4>
              <p>Price : {item.price}€</p>            
            </div>
            <div className="bloc-input">
              <label htmlFor="quantityInput">Quantité</label>
              <input onChange={e => handleChange(e, item.id)} type="number" id="quantityInput" value={item.quantity} min="1" />
            </div>
            <p className='item-price'>= {(item.price * item.quantity).toFixed(2)}€</p>
            <button onClick={console.log(storeState),() => dispatch({
              type:"DELETEITEM",
              payload: item
            }) } className='btn-delete'>X</button>
          </li>
        ) )}
    </ul>
          <p className="total-price">Total : {totalPrice.toFixed(2)}€</p>
          <button className={`btn-cart paiement ${visible ? "notVisible" :"" }`} onClick={getPaiement}>Procéder au paiement</button>
          <div className={`paiement ${visible ? "" : "notVisible"}`}>
                <form action="">
                  <ul>
                    <li>
                    <label htmlFor="name">Name : </label>
                    <input type="text" id="name" name="name" />
                    </li>
                    <li>
                    <label htmlFor="firstName">FirstName: </label>
                    <input type="text" id="firstName" name="firstName" />
                    </li>
                    <li>
                    <label htmlFor="number">Card Number : </label>
                    <input type="text" id="number" name="number" />
                    </li>
                    <li>
                    <label htmlFor="expiration">Expiration Date : </label>
                    <input type="text" id="expiration" name="expiration" />
                    </li>
                    <li>
                    <label htmlFor="ccv">Ccv : </label>
                    <input type="text" id="ccv" name="ccv" />
                    </li>
                </ul>

                </form>
            </div>
    </div>
    
    )
  
}
