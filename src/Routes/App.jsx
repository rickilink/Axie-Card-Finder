import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../Containers/Layout';
import { Not_Found } from './NotFound/NotFound';
import { Buscador } from '../pages/Buscador';
import { Home } from '../pages/Home/Index';




export const App = () => {
	return (
		
		 	<BrowserRouter>
				<Layout>
					<Routes>
						<Route exact path='/' element={ < Home /> } />
						<Route exact path='/Buscador' element={ < Buscador /> } />
						<Route exact path='*' element={ < Not_Found /> } />	
					</Routes> 
				</Layout>
			</BrowserRouter> 
	)
	
}

