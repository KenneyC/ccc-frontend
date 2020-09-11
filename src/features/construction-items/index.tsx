import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ItemButton } from './components/item-button';
import { appendToConstructionItems, removeFromConstructionItems } from './actions';
import { ApplicationState } from 'src/core/store/types';

interface ConstructionItemsProps {
	constructionItems: string[]
}

export const ConstructionItemsForm: React.FC<ConstructionItemsProps> = (
	props: ConstructionItemsProps
) => {
	const { constructionItems } = props;
	const dispatch = useDispatch();
	const checkConstructionItems = useSelector(
		(state: ApplicationState) => state.constructionItems.selected
	);

	const constructionItemCallBack = (title: string) => {
		if (checkConstructionItems.includes(title)) {
			dispatch(removeFromConstructionItems(title));
		} else {
			dispatch(appendToConstructionItems(title));
		}
	};

	return (
		<div className="construction-items-wrapper">
			{constructionItems.map(
				(title: string): React.ReactNode => (
					<ItemButton
						title={title}
						onClick={() => constructionItemCallBack(title)}
						checked={checkConstructionItems.includes(title)}
					/>
				)
			)}
		</div>
	);
};
