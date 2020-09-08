import React from 'react';

interface ItemButtonProps {
	title: string;
	onClick: () => void;
}

export const ItemButton: React.FC<ItemButtonProps> = (props: ItemButtonProps) => {
	const { title, onClick } = props;
	return <button onClick={onClick}>{title}</button>;
};
