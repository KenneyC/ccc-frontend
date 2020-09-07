import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ConstructionItems } from './pages/construction-items';
import './App.scss';

export const App: React.FC = () => {
	return (
		<Router>
			<Route path="/">
				<ConstructionItems />
			</Route>
		</Router>
	);
};
