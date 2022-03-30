import React from "react";
import { Link } from 'react-router-dom';
import { Nav , Linkys ,Li} from "../../styles/Header.js";

export const Headers = () => {
    return(
        <Nav>
           <Linkys to="/">Card Finder</Linkys>
            <ul>
                <Link to="/cards"><Li >Nombre de Cartas</Li></Link>
                <Link to="/buscador"><Li >Buscador</Li></Link>
                <Link to="/partes"><Li >Imagenes de Cartas</Li></Link>
               
            </ul>
        </Nav>
)
}



