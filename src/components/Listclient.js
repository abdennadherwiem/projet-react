import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Elementclient from './Elementclient';


function Listclient() {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/clients")
            .then((response) => setClients(response.data));
    }, []);

    const deleteClient = async (id) => {
        if (!window.confirm("Are you sure you want to delete this client?")) {
            return;
        }

        axios.delete('http://localhost:3001/clients/' + id)
            .then(() => {
                console.log('Client successfully deleted!');
                setClients((prevClients) => prevClients.filter((client) => client.id !== id));
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
        
            <h2>Liste des clients</h2>
           
            <Elementclient clients={clients} deleteProd={deleteClient} />

        </>
    );
}

export default Listclient;