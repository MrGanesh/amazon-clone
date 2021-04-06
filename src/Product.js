import React from 'react'
import './Product.css'
import {useStateValue} from './StateProvider'
function Product({ id, title, image, price, rating }) {
  const [{user, basket, product}, dispatch] = useStateValue()
   
      console.log("user in product >>> ", user)
      console.log("product in product >>> ", product)
    const addToBasket = (e) => {
        // dispatch the item into the data layer
         fetch('http://localhost:5000/addCart',   
            {method: "put",
             headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
              
              _id:user._id, id, title, image, price, rating
            })
     })
     .then(res=> res.json())
     .then(data => {
       console.log(data.result.cart)

             dispatch({
            type: "ADD_TO_BASKET",
            basket:data.result.cart
        });
    
       })
   }
 
    console.log("basket >> ", basket)

    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                   

                </div>

            </div>

            <img src={image} alt={title} />
            <button onClick={(e)=>addToBasket(e)}> Add to basket</button>
        </div>
    )
}

export default Product
