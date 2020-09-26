import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ApplicationState } from 'src/core/store/types';
import { PageButton } from 'src/components/page-button';
import { updateSelectedConstructionItem } from 'src/pages/questionnaire/actions';
import { useNavigator } from 'src/services/helper';
import { RouteNames } from 'src/services/types';

export const SelectConstructionItems: React.FC = () => {
	const navigator = useNavigator();
	const [constructionItems, sectionStatuses] = useSelector((state: ApplicationState) => [
		state.questionnaire.questionnaire.constructionItems,
		state.questionnaire.sectionStatuses,
	]);
	const dispatch = useDispatch();

	const handleClick = (constructionItem: string): void => {
		dispatch(updateSelectedConstructionItem(constructionItem));
		navigator(RouteNames.QUESTIONNAIRE_FORM);
	};

	return (
		<div className="select-construction-items-wrapper page">
			<span className="construction-items-title">
				Please select a construction item and complete it's questions
			</span>
			<div className="select-construction-items-buttons">
				{Object.keys(constructionItems).map((constructionItem) => {
					const questionsFinished = !Object.values(
						sectionStatuses[constructionItem]
					).includes(false);
					return (
						<PageButton
							name={constructionItem}
							onClick={() => handleClick(constructionItem)}
							style={{
								backgroundColor: questionsFinished ? '#9fe3b3' : '',
							}}
						/>
					);
				})}
			</div>
		</div>
	);
};
