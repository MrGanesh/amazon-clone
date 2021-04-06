import React,{useState} from 'react'
import './Header.css'
// import SearchIcon from '@material-ui/icons/Search';
// import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom'
import {useStateValue} from './StateProvider'
function Header() {
  const [{user, basket}, dispatch] = useStateValue()
  const handleLogin = (e) => {
    e.preventDefault()
    dispatch({
      type:'REMOVE_USER',
      user:null
    })
  }
    return (
       <div className="header">
            <Link to="/">
                <img className="header_logo" src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' />
            </Link>


            <div className="header_search">
                <input className="header_searchInput" type="text" />
             
            </div>

            <div
                className="header_nav">
                <Link to={!user && "/login"}>
                    <div   className="header_option">
                        <span className="option_lienOne">Hello  {!user ? 'Guest' : user.name}</span>
                      {
                         !user ? ( <span className="option_lienTwo">Sign In</span>) : 
                            ( <span onClick={(e)=> handleLogin(e)} className="option_lienTwo">Sign Out</span>)
                       
                           }
                     
                    </div>
                </Link>
                <Link to='/orders'>
                    <div className="header_option">
                        <span className="option_lienOne">Hello {!user ? 'Guest' : user.name}</span>
                        <span className="option_lienTwo">& Orders</span>
                    </div>
                </Link>
                <div className="header_option">
                    <span className="option_lienOne">Your</span>
                    <span className="option_lienTwo">Prime</span>
                </div>

                <Link to='/checkout'>
                    <div className="header_optionBasket">
                    
                        <span className="header_optionLienTwo header_BasketCount" >{basket ? basket.length : '0'}</span>
                    </div>
                </Link>


            </div>

        </div>
  
    )
}

export default Header
