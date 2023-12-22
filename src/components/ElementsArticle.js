import {Link } from "react-router-dom";
//import Menuadmin from '../components/Menuadmin';

function ElementsArticle(props) {
   
    return ( 
      
        <div className="container">
          <div className="row">
        {
        props.articles.map(article =>{
        return(
        <div key={article.id} className="col-sm-4">
        <div className="card" style={{"width": "18rem"}}>
          <img src={article.imageartpetitf} className="card-img-top" alt={article.designation}/>
          <div className="card-body">
            <h5 className="card-title">{article.designation}</h5>
            <p className="card-text">{article.marque}</p>
            <p className="card-text">{article.prixAchat}</p>
            <p className="card-text">{article.qtestock}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{article.prixVente} TND</li>
          </ul>
          <div className="card-body">
          <Link to={`/editArticle/${article.id}`} className="btn btn" style={{ backgroundColor: '#ffff66' , color : 'black'  }}>Modifier</Link>
          <button onClick={()=>{props.deleteProd(article.id)}} className="btn btn-danger" style={{ backgroundColor: 'orange' , color : 'black'  }}>Supprimer</button>

            
          </div>
        </div>
                            </div>
                        )
                    })
                }
        </div>
        </div>
             );
        }
        

export default ElementsArticle;
