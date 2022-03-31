import styled from 'styled-components'





export const Ul = styled.ul`
display:flex;
width:99%;
justify-content:center;
flex-wrap: wrap;

}

`

export const Li = styled.li`
display:flex;
height:300px;
width:230px;

@media(max-width: 470px){
    height:200px;
width:130px;
}
@media(max-width: 300px){
    height:100px;
width:30px;
}


`


export const Img = styled.img`
image-fit:cover;

height:inherit;
width:inherit;
`



export const Button = styled.button`
display:flex;
width:100px;
border-radius:15%;
margin:0 0 1% 50%;
background-color: rgba(9 , 24, 94 , 0.4);
color:white;
height:35px;
justify-content:center;
align-items:center;






`




