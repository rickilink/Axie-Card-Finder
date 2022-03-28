import React from "react";
import { Link } from 'react-router-dom';
import { Nav , Li} from "../../styles/Header.js";

export const Headers = () => {
    return(
        <Nav>
           <h2 className="Logo">Rickilink</h2>
            <ul>
                <Link to="/cards"><Li className="Header_nav_ul_a_li">Nombre de Cartas</Li></Link>
                <Link to="/buscador"><Li className="Header_nav_ul_a_li">Buscador</Li></Link>
                <Link to="/partes"><Li className="Header_nav_ul_a_li">Imagenes de Cartas</Li></Link>
                <Link to="/Mouth"><Li className="Header_nav_ul_a_li">Cuatro</Li></Link>
                <Link to="#"><Li className="Header_nav_ul_a_li">Cinco</Li></Link>
                <Link to="#"><Li className="Header_nav_ul_a_li">Seis</Li></Link>
            </ul>
        </Nav>
)
}



