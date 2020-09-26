import React from 'react';
import { useSelector } from 'react-redux';
import { SimpleButton } from 'src/components/button';
import { AnswerSummaryTable } from 'src/components/question-section/components/summary-table';
import { ApplicationState } from 'src/core/store/types';

export const SummaryTable: React.FC = () => {
	const completedAnswers = useSelector(
		(state: ApplicationState) => state.questionnaire.completedAnswers
	);

	return (
		<div className="summary-table-wrapper">
			<h1>Summary</h1>
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
			<SimpleButton text="Confirm and Continue" onClick={() => {}} />
		</div>
	);
};
