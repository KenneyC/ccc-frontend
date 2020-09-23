import React from 'react';
import { useSelector } from 'react-redux';
import { LoadingRing } from 'src/components/loading-ring';
import { ApplicationState } from 'src/core/store/types';

interface LoadingPlaceHolderProps {
	children: React.ReactNode;
}

export const LoadingPlaceHolder: React.FC<LoadingPlaceHolderProps> = (
	props: LoadingPlaceHolderProps
) => {
	const { children } = props;
	const { loading, text } = useSelector((state: ApplicationState) => state.api);

	return (
		<>
			{loading ? (
				<div className="page loading-place-holder">
					<LoadingRing />
					<h3>{text}</h3>
				</div>
			) : (
				children
			)}
		</>
	);
};
