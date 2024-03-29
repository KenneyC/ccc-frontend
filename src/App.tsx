import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { storeAndPersistor } from './core/store';
import { SideBar } from './features/side-bar';
import { Routes } from './services/types';
import './App.scss';
import './assets/style/index.scss';
import { LoadingPlaceHolder } from './features/loading-placeholder';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

export const App: React.FC = () => {
	const { store, persistor } = storeAndPersistor();
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<Router>
					<div className="main-body">
						<SideBar />
						<LoadingPlaceHolder>
							<Switch>
								{Object.keys(Routes).map((route: string) => {
									return (
										<Route exact path={Routes[route].route}>
											{Routes[route].component}
										</Route>
									);
								})}
							</Switch>
						</LoadingPlaceHolder>
					</div>
				</Router>
			</PersistGate>
		</Provider>
	);
};
