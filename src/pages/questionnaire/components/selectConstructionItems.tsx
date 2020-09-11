import React from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from 'src/core/store/types';
import { PageButton } from 'src/components/page-button';

export const SelectConstructionItems: React.FC = () => {
	const constructionItems = useSelector(
		(state: ApplicationState) => state.questionnaire.questionnaire.constructionItems
	);

	return (
		<div className="select-construction-items-wrapper">
			<span className="construction-items-title">
				Please select a construction item and complete it's questions
			</span>
			{Object.keys(constructionItems).map((constructionItem) => {
				return <PageButton name={constructionItem} onClick={() => {}} />;
			})}
		</div>
	);
};
