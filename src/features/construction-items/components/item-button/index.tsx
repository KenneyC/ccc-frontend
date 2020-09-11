import React from 'react';

interface ItemButtonProps {
	title: string;
	checked: boolean;
	onClick: () => void;
}

export const ItemButton: React.FC<ItemButtonProps> = (props: ItemButtonProps) => {
	const { title, onClick, checked } = props;
	return (
		<div onClick={onClick} className="item-button-wrapper input-group">
			<input type="checkbox" value={title} checked={checked}/>
			<label>{`${title.charAt(0).toUpperCase()}${title.slice(1)}`}</label>
		</div>
	);
};
