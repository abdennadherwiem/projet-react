import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddClient() {
  const navigate = useNavigate();

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [numtel, setNumTel] = useState("");
  const [image, setImage] = useState(""); // Utilisez setImage au lieu de setimage


  const handleSubmit = (e) => {
    e.preventDefault();

    const newClient = {
      nom,
      prenom,
      email,
      numtel,
      image
    };

    // Make a POST request to add the new client to the database
    axios.post("http://localhost:3001/Clients", newClient) // Adjust the API endpoint
      .then((res) => {
        console.log(res);
        navigate("/clients");
      })
      .catch((error) => {
        console.error(error);
        alert("Erreur ! Insertion non effectuée");
      });
  };

  return (
    <div className="container">
      <h2>Ajout d'un client</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-3">
          <div className="col-sm-5 p-2 g-col-6">
            <input
              className="form-control"
              placeholder="Nom"
              type="text"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
            />
          </div>
          <div className="col-sm-5 p-2 g-col-6">
            <input
              className="form-control"
              placeholder="Prénom"
              type="text"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
            />
          </div>
          <div className="col-sm-5 p-2 g-col-6">
            <input
              className="form-control"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-sm-5 p-2 g-col-6">
            <input
              className="form-control"
              placeholder="Numéro de téléphone"
              type="number"
              value={numtel}
              onChange={(e) => setNumTel(e.target.value)}
            />
          </div>
          <div className="col-sm-5 p-2 g-col-6">
            <input
              className="form-control"
              placeholder="Image"
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div>{image ? <img src={image} alt="" width="70" /> : null}</div>
          <div>
            <button className="btn btn-success" type="submit">
              Valider
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddClient;


