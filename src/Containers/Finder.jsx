import React from "react";
import reactDom from "react-dom";


export function None(a){
  if (a ==="a"){
    return( reactDom.render(< img src={'https://i.ibb.co/BgZsJmm/DEFAULT-FISH.png'} className="Img-Tail"/> , document.getElementById("Tail")))
}if (a ==="b"){
    return( reactDom.render(< img src={'https://i.ibb.co/BgZsJmm/DEFAULT-FISH.png'} className="Img-Tail"/> , document.getElementById("Mouth")))
}if (a ==="c"){
    return( reactDom.render(< img src={'https://i.ibb.co/BgZsJmm/DEFAULT-FISH.png'} className="Img-Tail"/> , document.getElementById("Ears")))
}if (a ==="d"){
    return( reactDom.render(< img src={'https://i.ibb.co/BgZsJmm/DEFAULT-FISH.png'} className="Img-Tail"/> , document.getElementById("Back")))
}if (a ==="e"){
    return( reactDom.render(< img src={'https://i.ibb.co/BgZsJmm/DEFAULT-FISH.png'} className="Img-Tail"/> , document.getElementById("Horn")))
}if (a ==="f"){
    return( reactDom.render(< img src={'https://i.ibb.co/BgZsJmm/DEFAULT-FISH.png'} className="Img-Tail"/> , document.getElementById("Eyes")))
}
}


export function matchTail(a){
  
      return( reactDom.render(< img src={a} className="Img-Tail"/> , document.getElementById("Tail"))
      )
}

export function matchMouth(a){
   
       return( reactDom.render(< img src={a} className="Img-Tail"/> , document.getElementById("Mouth"))
       )
 }
 export function matchEars(a){
   
    return( reactDom.render(< img src={a} className="Img-Tail"/> , document.getElementById("Ears"))
    )
}
export function matchBack(a){
   
    return( reactDom.render(< img src={a} className="Img-Tail"/> , document.getElementById("Back"))
    )
}
export function matchHorn(a){
   
    return( reactDom.render(< img src={a} className="Img-Tail"/> , document.getElementById("Horn"))
    )
}
export function matchEyes(a){
   
    return( reactDom.render(< img src={a} className="Img-Tail"/> , document.getElementById("Eyes"))
    )
}
 
 

