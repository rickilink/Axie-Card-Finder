import {useState} from "react";
import React from "react";

import { Img, Ul , Li ,Button } from './styles'
import { RandomCard } from "../../Containers/randomCard";


 const ImagenesDeCartas = () => {
    const [count, setCount] = useState(0);
    return(
        <div>
           
           
            <section>
            <Button onClick={() => setCount(count + 1)}>Refresh</Button>

                <Ul>
                    <Li><Img src={RandomCard()} alt="Image"/></Li>
                    <Li><Img src={RandomCard()} alt="Image"/></Li>
                    <Li><Img src={RandomCard()} alt="Image"/></Li>
                    <Li><Img src={RandomCard()} alt="Image"/></Li>
                    <Li><Img src={RandomCard()} alt="Image"/></Li>
                    <Li><Img src={RandomCard()} alt="Image"/></Li>
                    <Li><Img src={RandomCard()} alt="Image"/></Li>
                    <Li><Img src={RandomCard()} alt="Image"/></Li>
                    <Li><Img src={RandomCard()} alt="Image"/></Li>
                   
                </Ul>
                
            </section>


        </div>
    )
}

export default ImagenesDeCartas