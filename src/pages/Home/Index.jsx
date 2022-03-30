import React from "react";
import {H2 ,P , Img, Ul } from './styles'
import { Cards } from "../../components/ImagesCards";
import { RandomCard } from "../../Containers/randomCard";

export const Home = () => {
    return(
        <div>
            <H2>Welcome!</H2>
            <P>aqui podras conseguir las cartas de Axie infinnity Origin</P>
            <section>
                <Ul>
                    <li><Img src={RandomCard()}/></li>
                    <li><Img src={RandomCard()}/></li>
                    <li><Img src={RandomCard()}/></li>
                    <li><Img src={RandomCard()}/></li>
                    <li><Img src={RandomCard()}/></li>


                </Ul>
                
            </section>


        </div>
        
    )
}