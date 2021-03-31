import React,{useEffect} from "react";
import "./style.css";
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import Orders from './Orders';
import Signup from './Signup'
import {useStateValue} from './StateProvider'
export default function App() {
  const [{user, basket}, dispatch] = useStateValue()
   useEffect(() => {
    const user = JSON.parse( localStorage.getItem('user') )
    if(user){  
      dispatch({type:"SET_USER",user:user})   
      // history.push('/')
    }

    if(user.cart){
       dispatch({type:"ADD_TO_BASKET",basket:user.cart})   
    }
  },[])
  return (
     <Router>
    
      <div className="App">
        <Header />
        <Switch>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/payment">
          
              <Payment />
           
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
