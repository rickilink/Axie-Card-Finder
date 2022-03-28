import React from "react";
import reactDom from "react-dom";
import { App } from './Routes/App';

/* import {Boca , Ojos , Cuerno , Espalda ,Cola , Orejas , Left} from './App'

reactDom.render(<Boca /> , document.getElementById('boca'))
reactDom.render(<Cuerno /> , document.getElementById('cuerno'))
reactDom.render(<Ojos /> , document.getElementById('ojos'))
reactDom.render(<Espalda /> , document.getElementById('espalda'))
reactDom.render(<Cola /> , document.getElementById('cola'))
reactDom.render(<Orejas /> , document.getElementById('orejas')) */

reactDom.render(<App />, document.getElementById('app'))