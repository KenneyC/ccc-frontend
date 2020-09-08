import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { store } from './core/store';
import { ConstructionItems } from './pages/construction-items';
import './App.scss';

export const App: React.FC = () => {
	return (
		<Provider store={store}>
			<Router>
				<Route path="/">
					<ConstructionItems />
				</Route>
			</Router>
		</Provider>
	);
};
