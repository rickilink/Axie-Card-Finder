import styled from "styled-components";


export const Img = styled.img`
;

display:flex;
width:500px;
height:500px;
align-items:center;
justify-content:center;
position:absolute;
border: 3px solid #fcfcfc;
border-radius: 30px;
margin-left: 6% ;
margin-top:1%;
image-fit:cover;

@media(max-width: 640px){
    display:none;

}

`