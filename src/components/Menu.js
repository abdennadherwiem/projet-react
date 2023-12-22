import Logo from "../Assets/ert8.png";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useShoppingCart } from 'use-shopping-cart';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { auth } from "../fireConfig";
import { onAuthStateChanged } from "firebase/auth";

const Menu = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { cartCount } = useShoppingCart();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const logOut = () => {
    auth.signOut().then(() => {
      console.log('signOut');
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <div>
      <div className="alert" style={{ textAlign: 'center', backgroundColor: '#ffff66', padding: '1px', margin: '0' }}>
        <p className="alert-text">!!!Free Shopping On All U.S. Orders 15DT+</p>
      </div>
      
      <nav className="navbar navbar-expand-lg bg-orange" style={{ backgroundColor: 'orange', marginTop: '0' }}>
        <div className="container-fluid">
        <img src={Logo} alt="Logo" style={{ width: '170px', marginRight: '170px' }} />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/ListCards">ListProducts</Link>
              </li>
              
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-yellow" type="submit" style={{ backgroundColor: '#ffff66', padding: '5px ', marginLeft: '10px', fontSize: '15px' }}>Search</button>
              <Toolbar>
                <Button color="inherit" style={{ marginLeft: '-10px', fontSize: '20px', marginTop: '6px' }}>
                  <Link to="/cart">{cartCount}<ShoppingCartIcon fontSize="large" /></Link>
                </Button>
              </Toolbar>
            </form>

            {!isLoggedIn
              ? (
                <Link className="btn btn-outline-primary" to="/loginclient">Log In</Link>
              ) : (
                <button className="btn btn-outline-primary" onClick={logOut}>Log Out</button>
              )
            }
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Menu;

