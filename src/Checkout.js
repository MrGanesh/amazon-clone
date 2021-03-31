import React from 'react'
import './Checkout.css'
import FlipMove from 'react-flip-move';
import {useStateValue} from './StateProvider'
import CheckoutProduct from './CheckoutProduct'

function Checkout() {
    const [{user, basket }, dispatch] = useStateValue()
    const customEnterAnimation = {
        from: { transform: 'scale(0.5, 1)' },
        to: { transform: 'scale(1, 1)' }
    };
    console.log("basket in checkout>>>", basket)
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" alt=""
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Vernac13th/1500x150_V2_Eng._CB412582591_.jpg" />

                <div>
                    <h3>Hello, {user?.email} </h3>
                    <h2 className="checkout_title">Your Shopping Basket</h2>
                    <FlipMove enterAnimation={customEnterAnimation}>
                        {
                            basket.map(item => (
                                <CheckoutProduct
                                    _id={item._id}
                                    id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    image={item.image}
                                    rating={item.rating}
                                />
                            ))
                        }
                    </FlipMove>
                </div>

            </div>

            <div className="checkout_right">
              
            </div>

        </div >
    )
}

export default Checkout
