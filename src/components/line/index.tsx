import React from 'react';

interface LineProps {
	activated: boolean;
}

export const Line: React.FC<LineProps> = (props: LineProps) => {
	const { activated } = props;
	return <div className={`line ${activated ? 'line-activated' : ''}`} />;
};
