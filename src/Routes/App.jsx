import React from 'react';
import {Suspense} from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../Containers/Layout';
import { Not_Found } from './NotFound/NotFound';
// import { Buscador } from '../pages/Buscador';
import { Home } from '../pages/Home/Index';
//import { ImagenesDeCartas } from '../pages/ImagenesDeCartas/index';


const Buscador = React.lazy(( ) =>  import('../pages/Buscador'))
const ImagenesDeCartas = React.lazy(( ) =>  import('../pages/ImagenesDeCartas/'))



export const App = () => {
	return (
		<Suspense fallback={<div/>}>
		 	<BrowserRouter>
				<Layout>
					<Routes>
						<Route exact path='/' element={ < Home /> } />
						<Route exact path='/Buscador' element={ < Buscador /> } />
						<Route exact path='/imgs' element={ < ImagenesDeCartas />} />
						<Route exact path='*' element={ < Not_Found /> } />	
					</Routes> 
				</Layout>
			</BrowserRouter> 
		</Suspense>
	)
	
}

