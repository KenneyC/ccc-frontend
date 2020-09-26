import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ApplicationState } from 'src/core/store/types';
import { PageButton } from 'src/components/page-button';
import { updateSelectedConstructionItem } from 'src/pages/form/actions';
import { useNavigator } from 'src/services/helper';
import { RouteNames } from 'src/services/types';
import { SimpleButton } from 'src/components/button';
import { addSummaryData } from '../actions';
import { SummaryType } from '../result-summary/types';

export const SelectConstructionItems: React.FC = () => {
	const navigator = useNavigator();
	const [allQuestionsCompleted, setAllQuestionsCompleted] = useState<boolean>(false);
	const [
		constructionItems,
		sectionStatuses,
		completedAnswers,
	] = useSelector((state: ApplicationState) => [
		state.questionnaire.questionnaire.constructionItems,
		state.questionnaire.sectionStatuses,
		state.questionnaire.completedAnswers,
	]);
	const dispatch = useDispatch();

	const handleConstructionItemClick = (constructionItem: string): void => {
		dispatch(updateSelectedConstructionItem(constructionItem));
		navigator(RouteNames.QUESTIONNAIRE_FORM);
	};

	const handleContinueClick = (): void => {
		dispatch(
			addSummaryData({
				type: SummaryType.ALL,
				summaryData: completedAnswers,
			})
		);
		navigator(RouteNames.QUSTIONNAIRE_SUMMARY);
	};

	useEffect(() => {
		const constructionItemKeys = Object.keys(sectionStatuses);
		const completedStatuses = constructionItemKeys.map((constructionItem) => {
			const statuses = Object.values(sectionStatuses[constructionItem]);
			return !statuses.includes(false);
		});
		console.log(completedStatuses);
		completedStatuses.includes(false)
			? setAllQuestionsCompleted(false)
			: setAllQuestionsCompleted(true);
	}, [sectionStatuses]);

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
							onClick={() => handleConstructionItemClick(constructionItem)}
							style={{
								backgroundColor: questionsFinished ? '#9fe3b3' : '',
							}}
						/>
					);
				})}
			</div>
			<SimpleButton
				text="Verify and Continue"
				onClick={handleContinueClick}
				disabled={!allQuestionsCompleted}
			/>
		</div>
	);
};
