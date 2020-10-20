import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/done.css';

export default function done(){
    return(
        <div id = "page-created-orphanage">
            <div className="content">
                <main>
                    <h1>Ebaaa!</h1>
                    <p>O cadastro deu certo e foi enviado
ao administrador para ser aprovado.
Agora é só esperar :)</p>
                </main>
            
                <Link to="/app" className="back-to-map">
                    <p>Voltar para o mapa </p>
                </Link>
            </div>
        </div>
    )
}