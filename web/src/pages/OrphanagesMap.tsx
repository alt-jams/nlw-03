import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {FiPlus, FiArrowRight} from 'react-icons/fi';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/orphanages-map.css';
import MapIcon from '../utils/mapIcon';
import api from '../services/api';

interface Orphanage {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}

function OrphanagesMap(){
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    useEffect(() => {
        api.get('orphanages').then(response => {
            setOrphanages(response.data);
        });
    }, []);

    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Goioerê</strong>
                    <span>Paraná</span>
                </footer>
            </aside>

            <Map center={[-24.1968704,-53.0136593]} 
            zoom = {15}
            style={{ width: '100%', height: '100%'}}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                
            {orphanages.map(orphanage => {
                return(
                    <Marker 
                    key={orphanage.id}
                    icon = {MapIcon}                    position = {[orphanage.latitude,orphanage.longitude]}
                >
                    <Popup closeButton = {false} minWidth = {220} maxWidth = {220} className = "map-popup">
                        {orphanage.name}
                        <Link to={`/orphanages/${orphanage.id}`}> 
                            <FiArrowRight size = {20} color = "#FFF"/>
                        </Link>
                    </Popup>
                </Marker>
                )
            })}
            </Map>

            <Link to = "/orphanage/create" className="create-orphanage">
                <FiPlus size = {32} color = "#FFF"/>
            </Link>
        </div>
    );

}

export default OrphanagesMap;