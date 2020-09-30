import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SimpleButton } from 'src/components/simple-button';
import { AnswerSummaryTable } from 'src/components/question-section/components/summary-table';
import { ApplicationState } from 'src/core/store/types';
import { clearSummaryData } from 'src/pages/actions';
import { submitQuestionnaire } from 'src/services/api';
import { useAPIHelper } from 'src/services/api/hooks';
import { getCompletedAnswers } from '../selectors';

export const AllItemSummary: React.FC = () => {
	const [call] = useAPIHelper('Fetching your preliminary checklist');
	const dispatch = useDispatch();
	const completedAnswers = useSelector(getCompletedAnswers);
	const pdfTexts = useSelector((state: ApplicationState) => state.questionnaire.pdfTexts);

	const handleClick = () => {
		call(submitQuestionnaire, [pdfTexts]);
	};

	useEffect(() => {
		return () => dispatch(clearSummaryData());
	}, []);

	return (
		<div className="summary-table-wrapper">
			{Object.keys(completedAnswers).map((constructionItem: string) => {
				const sections = completedAnswers[constructionItem];
				return (
					<div>
						<h2>{`${constructionItem.charAt(0).toUpperCase()}${constructionItem.slice(
							1
						)}`}</h2>
						{Object.keys(sections).map((section: string) => {
							return (
								<div>
									<h3>{section}</h3>
									<AnswerSummaryTable
										selectedConstructionItem={constructionItem}
										sectionName={section}
									/>
								</div>
							);
						})}
					</div>
				);
			})}
			<SimpleButton text="Confirm and Continue" onClick={handleClick} />
		</div>
	);
};
