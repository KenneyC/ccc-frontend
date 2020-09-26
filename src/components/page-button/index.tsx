import React from 'react';
import { Arrow } from '../arrow';

interface PageButtonProps {
	name: string;
	style?: {
		backgroundColor: string;
	};
	onClick: () => void;
}

export const PageButton: React.FC<PageButtonProps> = (props: PageButtonProps) => {
	const { name, onClick, style } = props;

	return (
		<div className="page-button" onClick={onClick} style={style}>
			{`${name.charAt(0).toUpperCase()}${name.slice(1)}`}
			<div>
				<Arrow direction="right" />
			</div>
		</div>
	);
};
