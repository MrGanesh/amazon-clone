import React, { useEffect, useState } from 'react'
import './Orders.css'
import Order from './Order'
function Orders() {
    const [orders, setOrders] = useState([])
  
  
    return (
        <div className="orders">
            <h3>Your Orders</h3>
            <div className="orders_order">
                {
                    orders?.map(order => (
                        <Order order={order} />
                    ))
                }
            </div>
        </div>
    )
}

export default Orders
