import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { store } from './core/store';
import { Start } from './pages/start';
import './App.scss';

export const App: React.FC = () => {
	return (
		<Provider store={store}>
			<Router>
				<Route path="/">
					<Start />
				</Route>
			</Router>
		</Provider>
	);
};
