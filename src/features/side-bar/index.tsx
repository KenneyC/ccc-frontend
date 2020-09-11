import React from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from 'src/core/store/types';
import { Routes } from '../../services/types';
import { PageLink } from './components';

export const SideBar: React.FC = () => {
	const currentPage = useSelector((state: ApplicationState) => state.page.currentPage);

	return (
		<div className="side-bar-wrapper">
			<div>
				{Object.keys(Routes).map((route: string): React.ReactNode => {
						return (
							<PageLink
								name={Routes[route].name}
								active={currentPage === Routes[route].route}
							/>
						);
					}
				)}
			</div>
		</div>
	);
};
