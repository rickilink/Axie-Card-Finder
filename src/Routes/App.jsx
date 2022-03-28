import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout } from '../Containers/Layout';
import { Not_Found } from './NotFound/NotFound';

import { Buscador } from '../pages/Buscador'




export const App = () => {
	return (
		
		 	<BrowserRouter>
				<Layout>
					<Routes>
					
						<Route exact path='/' element={ < Buscador /> } />
						<Route exact path='*' element={ < Not_Found /> } />	
					</Routes> 
				</Layout>
			</BrowserRouter> 
	)
	
}

