import axios from 'axios';
import {useEffect,useState} from 'react';
import ElementsArticle from './ElementsArticle';
//import Menuadmin from './Menuadmin';
import citron from "../Assets/citron.png";
function ListArticles() {
    const[articles,setArticles]=useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:3001/produits")
        .then((response)=>setArticles(response.data));
       }, []);

    
          const deleteProd = async (id) => {
            if (!window.confirm("Are you sure you want to delete")) {
              return;
            }
        
            axios.delete('http://localhost:3001/produits/' + id)
              .then(() => {
                console.log('successfully deleted!')
                setArticles(prevArticles => prevArticles.filter((article) => article.id !== id));
              }).catch((error) => {
                console.log(error)
              })
        
          }
      

    return ( 
      
        <>
       
       <h2 style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
  <img src={citron} alt="" style={{ width: "80px" }} />
  Liste des skins Care
  <img src={citron} alt="" style={{ width: "80px" }} />
</h2>
        <ElementsArticle articles={articles} deleteProd={deleteProd}/>
        </>
     );
}

export default ListArticles;



