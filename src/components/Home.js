import React from "react";
import bg from "../Assets/bg.png";
//import BannerImage from "../Assets/bg4.webp";
import BannerImage from "../Assets/gif9.gif";
//import citron from "../Assets/gp.webp";
//import bg from "../../public/images/bg.png"; // Utilisez des barres obliques pour le chemin relatif

import { FiArrowRight } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faTwitter, faEnvelope } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope as farEnvelope } from '@fortawesome/free-regular-svg-icons';
import About from '../components/About.js';
import Imageslider from '../components/Imageslider.js';

import Work from '../components/work.js';
const Home = () => {



  const slides = [
    { url: "https://media0.giphy.com/media/hvB8Askgi37oF0t3o2/giphy.gif?cid=ecf05e470y6vsm2pom3z2s6bo0letdpn47qlw2hvwqalw7fu&ep=v1_gifs_search&rid=giphy.gif&ct=g", title: "beach" },
    
    
  ];

  const containerStyles = {
    width: "90%",
    height: "550px",
    margin: "200px auto 0",
    overflow: "hidden",
    border: "1px solid #ccc",
    backgroundImage: `url(${slides[0].url})`, // Utilisez la première image du tableau
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    

    
    <div className="home-container" >



      <div className="home-banner-container">
        <div className="home-bannerImage-container">
        <img src={bg} alt="" style={{ verticalAlign: 'bottom' }} />

        </div>
        <div className="home-text-section text-center">
          <h1 className="primary-heading">
            Your Favourite skin care Naturel
            
              </h1>
          <h1 className="primary-text">
            "For radiant skin, choose Garnier Skin Care with vitamin C. Fight
            signs of aging and rediscover your natural."
            

          </h1>
          <div className="text-end">
            <Link to="/articles">
            <button className="secondary-button"  >
              Order Now <FiArrowRight />{" "}
            </button>
            </Link>

          </div>
          
          <div className="social-links " >
          <FontAwesomeIcon
  icon={faInstagram}
  style={{
    
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: '17px ' ,
    height:30,
    backgroundColor:'#ffff66',
    marginTop: "30px",
    fontSize:"30px",
    borderRadius:"100px",
    padding:7,
    
  }}
/>

      <FontAwesomeIcon icon={faFacebookF} style={{
    backgroundColor:'#ffff66',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: '17px',
    height:30,
    fontSize:"30px",
    borderRadius:"100px",
    padding:6
  }} />
      <FontAwesomeIcon icon={faTwitter} style={{
    backgroundColor:'#ffff66',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: '17px',
    height:30,
    fontSize:"30px",
    padding:6,
    
    borderRadius:"100px",
  }} />
      <FontAwesomeIcon icon={farEnvelope} style={{
    backgroundColor:'#ffff66',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: '17px',
    height:30,
    width:30,

    fontSize:"30px",
    borderRadius:"100px",
  padding:6
    
  }} />
    </div>






        </div>
        <div className="home-image-section">
        
        </div><img src={BannerImage} alt=""  style={{ height: "350px",
    width: "350px",
    margin: "10px 0 0px 10px", // Adjust the margin as needed (top, right, bottom, left)
    position: "relative",   // Set position to relative
    bottom: "10px",         // Move the image down by 10 pixels
     
    top:"80px",
    right:"550px"
      }} />
       
      </div>
      
     
      <div>
      
      <div style={containerStyles}>
        {/*<Imageslider slides={slides} />*/}
      </div>
    </div>

      <About />
      <Work />
      
    </div>
    


  );
};

export default Home;
