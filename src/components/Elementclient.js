import {Link } from "react-router-dom";
function Elementclient(props) {
  return (
    <div className="container">
      <div className="row">
        {props.clients.map((client) => (
          <div key={client.id} className="col-sm-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src={client.image} className="card-img-top" alt={client.nom} />
              <div className="card-body">
              <h5 className="card-title">{client.nom}</h5>
                <h5 className="card-title">{client.prenom}</h5>
                <p className="card-text">{client.numtel}</p>
                <p className="card-text">{client.email}</p>
              </div>
              <div className="card-body">
              <Link to={`/editclient/${client.id}`} className="btn btn-primary">Modifier</Link>
              <button onClick={()=>{props.deleteProd(client.id)}} className="btn btn-danger">Supprimer</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Elementclient;