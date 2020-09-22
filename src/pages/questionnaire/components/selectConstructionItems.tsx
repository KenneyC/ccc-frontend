import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ApplicationState } from 'src/core/store/types';
import { PageButton } from 'src/components/page-button';
import { updateSelectedConstructionItem } from '../actions';

export const SelectConstructionItems: React.FC = () => {
	const constructionItems = useSelector(
		(state: ApplicationState) => state.questionnaire.questionnaire.constructionItems
	);
	const dispatch = useDispatch();

	const handleClick = (constructionItem: string): void => {
		dispatch(updateSelectedConstructionItem(constructionItem));
	};

	return (
		<div className="select-construction-items-wrapper">
			<span className="construction-items-title">
				Please select a construction item and complete it's questions
			</span>
			<div className="select-construction-items-buttons">
				{Object.keys(constructionItems).map((constructionItem) => {
					return (
						<PageButton
							name={constructionItem}
							onClick={() => handleClick(constructionItem)}
						/>
					);
				})}
			</div>
		</div>
	);
};
