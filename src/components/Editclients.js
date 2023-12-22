import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditClient() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [numtel, setNumtel] = useState("");
    const [email, setEmail] = useState("");
    const [image, setimage] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:3001/Clients/${id}`)
            .then(res => {
                setNom(res.data.nom);
                setPrenom(res.data.prenom);
                setNumtel(res.data.numtel);
                setEmail(res.data.email);
                setimage(res.data.image);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedClient = {
            nom,
            prenom,
            numtel,
            email,
            image
        };

        axios.put(`http://localhost:3001/Clients/${id}`, updatedClient)
            .then(res => {
                console.log(res);
                navigate("/clients");
            })
            .catch(error => {
                console.log(error);
                alert("Erreur ! Modification non effectuée");
            });
    };

    return (
        <div className="container">
            <h2>Modification d'un client</h2>
            <form onSubmit={handleSubmit}>
                <div className="grid gap-3">
                    <div className="col-sm-5 p-2 g-col-6">
                        <input
                            className="form-control"
                            placeholder="Nom"
                            type="text"
                            value={nom}
                            onChange={e => setNom(e.target.value)}
                        />
                    </div>
                    <div className="col-sm-5 p-2 g-col-6">
                        <input
                            className="form-control"
                            placeholder="Prénom"
                            type="text"
                            value={prenom}
                            onChange={e => setPrenom(e.target.value)}
                        />
                    </div>
                    <div className="col-sm-5 p-2 g-col-6">
                        <input
                            className="form-control"
                            placeholder="Numéro de téléphone"
                            type="number"
                            value={numtel}
                            onChange={e => setNumtel(e.target.value)}
                        />
                    </div>
                    <div className="col-sm-5 p-2 g-col-6">
                        <input
                            className="form-control"
                            placeholder="Email"
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="col-sm-5 p-2 g-col-6">
                        <input
                            className="form-control"
                            placeholder="Image"
                            type="text"
                            value={image}
                            onChange={e => setimage(e.target.value)}
                        />
                    </div>
                    <div>{image ? <img src={ "/"+ image} alt={image} width="70" /> : null}</div>
                    <div>
                        <button type="submit" className="btn btn-success">Valider</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default EditClient;