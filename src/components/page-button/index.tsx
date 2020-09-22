import React from 'react';
import { Arrow } from '../arrow';

interface PageButtonProps {
	name: string;
	onClick: () => void;
}

export const PageButton: React.FC<PageButtonProps> = (props: PageButtonProps) => {
	const { name, onClick } = props;

	return (
		<div className="page-button" onClick={onClick}>
			{`${name.charAt(0).toUpperCase()}${name.slice(1)}`}
			<div>
				<Arrow />
			</div>
		</div>
	);
};
