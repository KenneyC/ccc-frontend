import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { store } from './core/store';
import { Start } from './pages/start';
import './App.scss';
import './assets/style/index.scss';
import { SideBar } from './features/side-bar';
import { Routes, RouteNames } from './services/types';

export const App: React.FC = () => {
	return (
		<Provider store={store}>
			<Router>
				<div className="main-body">
					<SideBar />
					<Switch>
						{Object.keys(Routes).map((route: string) => {
							return (
								<Route exact path={Routes[route].route}>
									{Routes[route].component}
								</Route>
							);
						})}
					</Switch>
				</div>
			</Router>
		</Provider>
	);
};
