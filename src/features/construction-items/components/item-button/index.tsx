import React from 'react';

interface ItemButtonProps {
	title: string;
	checked: boolean;
	onClick: () => void;
}

export const ItemButton: React.FC<ItemButtonProps> = (props: ItemButtonProps) => {
	const { title, onClick, checked } = props;
	return <div onClick={onClick}><input type="radio" value={title} checked={checked}/>{title}</div>;
};
