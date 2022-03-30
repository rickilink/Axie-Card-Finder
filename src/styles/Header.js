
import styled from "styled-components";

    import { Link } from "react-router-dom";


export const Nav = styled.nav`

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 10px;
    padding-right: 4%;
    padding-left: 1%;

`

export const Li = styled.li`

list-style: none;  
    display: inline-block;   
    padding: 0px  20px;    /* Separacion entre el header list  */
    color: white;     
    text-decoration: none;
    font-size: 15px;
    &:hover{
        color:red;
  



    }


`

export const Linkys = styled(Link)`
color:white;
    font-size: 25px;
    letter-spacing: 2px;
    cursor: pointer;
    text-decoration:none;
    &:hover {
        color:red;
        transition:.5s;
    
  }

    

`











