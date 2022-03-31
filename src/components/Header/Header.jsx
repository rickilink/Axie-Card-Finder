import React from "react";
import { Link } from 'react-router-dom';
import { Nav , Linkys ,Li} from "./styles";

export const Headers = () => {
    return(
        <Nav>
           <Linkys to="/">Card Finder</Linkys>
            <ul>
            <Li > <Link to="/buscador">Buscador</Link></Li>
            <Li > <Link to="/imgs">Imagenes de Cartas</Link></Li>
               
            </ul>
        </Nav>
)
}



