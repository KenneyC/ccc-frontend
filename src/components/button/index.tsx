import React from 'react';

interface SimpleButtonProps {
	onClick: () => void;
}

export const SimpleButton: React.FC<SimpleButtonProps> = (props: SimpleButtonProps) => {
	const { onClick } = props;
	return (
		<button onClick={onClick} className="simple-button">
			Submit and Continue
		</button>
	);
};
