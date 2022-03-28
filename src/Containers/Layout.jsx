import React from 'react';
import { Headers } from '../Routes/Header/Header';

export const Layout = ({ children }) => {
	return (
		<div className="Layout">
			<Headers />
			{children}
		</div>
	);
}