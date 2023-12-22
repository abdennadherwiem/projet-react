import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
//import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
//import { useShoppingCart } from 'use-shopping-cart';
//import AddArticle from '../components/AddArticle';


import c1 from '../Assets/p1.jpg';
import c2 from '../Assets/c2.png';
import c3 from '../Assets/c3.jpg';

function Menuadmin() {
  //const { cartCount } = useShoppingCart();
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Navigation bar */}
      <nav className="navbar ">
        <div className="container-fluid" >
          <button style={{marginBottom:'370px', background:'orange'}}

            className="navbar-toggler"
            
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleDrawerOpen}
            
          >
            DashboardAdmin 
            <span className="navbar-toggler-icon"  ></span>
          </button>
          
        </div>
       
      </nav>

      {/* Drawer (Vertical Menu) */}
      <Drawer anchor="left" open={openDrawer} onClose={handleDrawerClose}>
        <List>
          <ListItem button component={Link} to="/">
            Home
          </ListItem>
          <ListItem button component={Link} to="/articles">
            Liste des Produits
          </ListItem>
          <ListItem button component={Link} to="/AddArticle">
            Ajout Produit
          </ListItem>
        </List>
      </Drawer>

      {/* Content */}
      <div style={{ marginLeft: openDrawer ? '240px' : '0', transition: 'margin 0.3s', flex: '1' }}>
        <div className="container">
         
          
         


        </div>
      </div>
      {/* Content */}



      
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginRight: '180px' , marginTop:'70px'}}>
        

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
  {/* Card 1 */}
  <div className="card" style={{ width: '250px',height:'350px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',marginRight:'120px' }}>
    <img src={c3} alt="Description de l'image 1" className="card-img-top" />
    <div className="card-body">
      <h5 className="card-title">View listes Products</h5>
      
      <ListItem button component={Link} to="/articles">
        <Button variant="contained" color="primary" style={{ background: "#ffff66", color: "black" }}>View all Liste Products</Button>
      </ListItem>
    </div>
  </div>

  {/* Card 2 */}
  <div className="card" style={{ width: '250px',height:'350px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',marginRight:'200px' }}>
    <img src={c2} alt="Description de l'image 2" className="card-img-top" />
    <div className="card-body">
      <h5 className="card-title">New Product</h5>
      {/*<p className="card-text">Admin Dashboard Overview 2</p>*/}
      <ListItem button component={Link} to="/AddArticle">
        <Button variant="contained" color="primary" style={{ background: "#ffff66", color: "black" }}>Ajout Products</Button>
      </ListItem>
    </div>
  </div>

  {/* Card 3 */}
  <div className="card" style={{ width: '250px',height:'350px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',marginLeft:'-90px' }}>
    <img src={c1} alt="Description de l'image 3" className="card-img-top" />
    <div className="card-body">
      <h5 className="card-title">Edit Product</h5>
      {/*<p className="card-text">Admin Dashboard Overview 2</p>*/}
      <ListItem button component={Link} to="/EditArticle/:id">
        <Button variant="contained" color="primary" style={{ background: "#ffff66", color: "black" }}>Edit Products</Button>
      </ListItem>
    </div>
  </div>
</div>


        
      </div>
    </div>
  );
}

export default Menuadmin;
