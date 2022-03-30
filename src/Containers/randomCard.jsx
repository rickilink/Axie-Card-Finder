import React from "react";

import {Ears  , Tail , Mouth , Back, Horn , Eyes}  from '../sources/GetElements/Axie_parts.js'

export  function RandomCard () {
    var random = Math.floor(Math.random()*6)

    var ass =  Tail[Math.floor((Math.random()*Tail.length))];
    var as2 =  Ears[Math.floor((Math.random()*Ears.length))];
    var as3 =  Back[Math.floor((Math.random()*Back.length))];
    var as4 =  Mouth[Math.floor((Math.random()*Mouth.length))];
    var as5 =  Horn[Math.floor((Math.random()*Horn.length))];
    var as6 =  Eyes[Math.floor((Math.random()*Eyes.length))];

if(random == 0){
   return ass.img
   
}if(random == 1){
   
       return as2.img
   
}if(random == 2){
   
       return as3.img
  
}if(random == 3){
   
       return as4.img

}if(random == 4){

       return as5.img

}if(random == 5){
    
       return as6.img
 
}

 
   
 }