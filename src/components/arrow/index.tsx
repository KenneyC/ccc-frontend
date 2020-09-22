import React, { useState, useCallback } from 'react';

interface ArrowProps {
	arrowProperties?: {
		borderColor?: string;
		top: number;
	};
	direction?: string;
	rotated?: boolean;
}

export const Arrow: React.FC<ArrowProps> = (props: ArrowProps) => {
	const { arrowProperties, rotated, direction } = props;

	return (
		<div
			className={`arrow-sprite ${
				rotated ? 'arrow-sprite-rotated' : `arrow-sprite-${direction}`
			}`}
			style={arrowProperties}
		/>
	);
};
