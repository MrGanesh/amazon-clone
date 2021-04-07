import React, { useEffect, useState } from 'react'
import './Orders.css'
import Order from './Order'
import {useStateValue} from './StateProvider'
function Orders() {
   
    const [{order}, dispatch] = useStateValue()
   console.log("order in orders.js >>>", order)
    return (
        <div className="orders">
            <h3>Your Orders</h3>
            <div className="orders_order">
                {
                    order?.map(order => (
                        <Order order={order} />
                    ))
                }
            </div>
        </div>
    )
}

export default Orders
