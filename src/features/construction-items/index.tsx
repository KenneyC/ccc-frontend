import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from 'src/core/store/types';
import { ItemButton } from './components/item-button';
import { appendToSelectedConstructionItems, removeFromSelectedConstructionItems } from './actions';

interface ConstructionItemsProps {
	constructionItems: string[];
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
			dispatch(removeFromSelectedConstructionItems(title));
		} else {
			dispatch(appendToSelectedConstructionItems(title));
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
