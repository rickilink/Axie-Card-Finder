import styled from 'styled-components'


export const Unorlist = styled.ul`
    display: flex;
    justify-content: end;
    size:500px;
    list-style-type:none;
    float: right;
    padding-right:10%;
    flex-wrap:wrap;

    @media(max-width: 640px){
        float:none;
        flex-direction:column;

    }
`

export const Lists = styled.li`
    color:white;    
    text-align:center;
   
    
    `

export const Divs = styled.div`
    padding-top: 3%;
    
    `

export const Divs2 = styled.div`
padding-top:3%;
    height: 15rem;
    width: 10rem;

    @media(max-width: 640px){
        height:100%

    }
`
export const Label = styled.label`
    color:white;
    font-size:12px;
`

