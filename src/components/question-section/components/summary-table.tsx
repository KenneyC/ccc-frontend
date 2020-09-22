import React from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from 'src/core/store/types';

interface AnswerSummaryTable {
	selectedConstructionItem: string;
	sectionName: string;
}

export const AnswerSummaryTable: React.FC<AnswerSummaryTable> = (props: AnswerSummaryTable) => {
	const { selectedConstructionItem, sectionName } = props;

	const currentAnswers = useSelector(
		(state: ApplicationState) => state.questionnaire.completedAnswers
	);

	return (
		<table className="questionnaire-form-result-summary-table">
			{currentAnswers[selectedConstructionItem] !== undefined &&
				currentAnswers[selectedConstructionItem][sectionName] !== undefined &&
				Object.keys(currentAnswers[selectedConstructionItem][sectionName]).map(
					(question: string) => (
						<tr>
							<td>{question}</td>
							<td className="questionnaire-form-result-summary-table-result">
								{
									currentAnswers[selectedConstructionItem][sectionName][question]
										.answer
								}
							</td>
						</tr>
					)
				)}
		</table>
	)
}