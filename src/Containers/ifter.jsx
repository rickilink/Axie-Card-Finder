import React from "react";
import { matchBack, matchEars, matchEyes, matchHorn, matchMouth, matchTail , None } from '../Containers/Finder';

import {Ears  , Tail , Mouth , Back, Horn , Eyes}  from '../sources/GetElements/Axie_parts'

export function ifer(entry){

        const resultado = Tail.find( Parte => Parte.value === entry )
        var IMGWAPA = resultado.img
        if(IMGWAPA ){
            matchTail(IMGWAPA)  
        }else{
            None("a")
        }
    
}
export function ifer2(entry){

    const resultado = Mouth.find( Parte => Parte.value === entry )
    var IMGWAPA = resultado.img
    if(IMGWAPA ){
        matchMouth(IMGWAPA)  
    }else{
        None("a")
    }

}
export function ifer3(entry){

    const resultado = Ears.find( Parte => Parte.value === entry )
    var IMGWAPA = resultado.img
    if(IMGWAPA ){
        matchEars(IMGWAPA)  
    }else{
        None("a")
    }

}
export function ifer4(entry){

    const resultado = Back.find( Parte => Parte.value === entry )
    var IMGWAPA = resultado.img
    if(IMGWAPA ){
        matchBack(IMGWAPA)  
    }else{
        None("a")
    }

}
export function ifer5(entry){

    const resultado = Horn.find( Parte => Parte.value === entry )
    var IMGWAPA = resultado.img
    if(IMGWAPA ){
        matchHorn(IMGWAPA)  
    }else{
        None("a")
    }

}
export function ifer6(entry){

    const resultado = Eyes.find( Parte => Parte.value === entry )
    var IMGWAPA = resultado.img
    if(IMGWAPA ){
        matchEyes(IMGWAPA)  
    }else{
        None("a")
    }

}





