import React from 'react';

interface SimpleButtonProps {
	text?: string;
	onClick: () => void;
	disabled?: boolean;
}

export const SimpleButton: React.FC<SimpleButtonProps> = (props: SimpleButtonProps) => {
	const { text, onClick, disabled } = props;
	return (
		<button onClick={onClick} className="simple-button" disabled={disabled}>
			{text}
		</button>
	);
};
