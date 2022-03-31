
import React, { useState } from 'react';
import Select from 'react-select';
import {Unorlist , Lists, Divs, Divs2, Label} from './styles';
import { ifer ,ifer2 ,ifer3 , ifer4 , ifer5 , ifer6 } from '../Containers/ifter';
import { LefterImage } from '../components/Imagenleft'

import {Ears  , Tail , Mouth , Back, Horn , Eyes}  from '../sources/GetElements/Axie_parts'

 function Buscador() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);
  const [selectedOption4, setSelectedOption4] = useState(null);
  const [selectedOption5, setSelectedOption5] = useState(null);
  const [selectedOption6, setSelectedOption6] = useState(null);
var a = selectedOption
var b = selectedOption2
var c = selectedOption3
var d = selectedOption4
var e = selectedOption5
var f = selectedOption6

if(a){
    if(a.value ){
        var as = a.value
        ifer(as)
    }}if(b){
    if(b.value ){
        var bs = b.value
        ifer2(bs)}
}if(c){
    if(c.value ){
        var cs = c.value
        ifer3(cs)    
    }
}if(d){
    if(d.value ){

        var ds = d.value
        ifer4(ds)
    }
}if(e){
    if(e.value ){
        var es = e.value
        ifer5(es)
    }
}if(f){
    if(f.value ){
        var fs = f.value
        ifer6(fs)
    }
}
  return (
    <Divs>
    <LefterImage />
        <Unorlist >
            <div id='Separator_1'>
                <Lists>
                    <Label>TAIL CARDS</Label>
                    <Select 

                    className='Lists_select'
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={Tail}
                    />
                    <Divs2 id='Tail' className='cards'></Divs2>
                    
                </Lists>
                <Lists>
                    <Label>MOUTH CARDS</Label>
                   
                    <Select
                    
                        className='Lists_select'
                        defaultValue={selectedOption2}
                        onChange={setSelectedOption2}
                        options={Mouth}
                        
                    />
                
                    <Divs2 id='Mouth' className='cards'> </Divs2>
                </Lists>
                </div>
            <div  id='Separator_2'>
                <Lists>
                <Label>EARS CARDS</Label>
                <Select
                
                     className='Lists_select'
                    
                    defaultValue={selectedOption3}
                    onChange={setSelectedOption3}
                    options={Ears}
                /><Divs2 id='Ears' className='cards'></Divs2>
                
                </Lists>
               
                <Lists>
                    <Label>BACK CARDS</Label>
                    <Select
                        className='Lists_select'
                        defaultValue={selectedOption4}
                        onChange={setSelectedOption4}
                        options={Back}
                        />
                        <Divs2 id='Back' className='cards'></Divs2>
                </Lists>
                </div>
            <div  id='Separator_3'>
                <Lists>
                    <Label>HORN CARDS</Label>
                    <Select
                        className='Lists_select'    
                        defaultValue={selectedOption5}
                        onChange={setSelectedOption5}
                        options={Horn}
                    />
                    <Divs2 id='Horn' className='cards'></Divs2>
                    
                </Lists>
                <Lists>
                    <Label>EYES CARDS</Label>
                    <Select
                        className='Lists_select'
                        defaultValue={selectedOption6}
                        onChange={setSelectedOption6}
                        options={Eyes}
                    />
                    <Divs2 id='Eyes' className='cards'></Divs2>
                </Lists>
            </div>
        </Unorlist>
    </Divs>
  );

 
}



export default Buscador