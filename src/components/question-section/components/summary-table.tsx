import React from 'react';
import { useSelector } from 'react-redux';
import { SvgTab } from 'src/assets/icons/components/tab';
import { ApplicationState } from 'src/core/store/types';
import { CompletedAnswer } from 'src/pages/questionnaire/types';

interface AnswerSummaryTable {
	selectedConstructionItem: string;
	sectionName: string;
}

export const AnswerSummaryTable: React.FC<AnswerSummaryTable> = (props: AnswerSummaryTable) => {
	const { selectedConstructionItem, sectionName } = props;

	const currentAnswers = useSelector(
		(state: ApplicationState) => state.questionnaire.completedAnswers
	);

	const renderSubAnswer = (
		question: string,
		currentSummaryAnswer: CompletedAnswer,
		sub: boolean
	): React.ReactNode => {
		const subQuestions = Object.keys(currentSummaryAnswer.subQuestionAnswers);
		return (
			<>
				<tr>
					<td className={sub ? 'questionnaire-form-result-summary-table-sub' : ''}>
						{sub && <SvgTab className="questionnaire-form-result-summary-table-icon" />}
						{question}
					</td>
					<td className="questionnaire-form-result-summary-table-result">
						{currentSummaryAnswer.answer}
					</td>
				</tr>
				{subQuestions.length > 0 &&
					subQuestions.map((subQuestion: string) =>
						renderSubAnswer(
							subQuestion,
							currentSummaryAnswer.subQuestionAnswers[subQuestion],
							true
						)
					)}
			</>
		);
	};

	return (
		<table className="questionnaire-form-result-summary-table">
			<tbody>
				{currentAnswers[selectedConstructionItem] !== undefined &&
					currentAnswers[selectedConstructionItem][sectionName] !== undefined &&
					Object.keys(currentAnswers[selectedConstructionItem][sectionName]).map(
						(question: string) => {
							return (
								<>
									{renderSubAnswer(
										question,
										currentAnswers[selectedConstructionItem][sectionName][
											question
										],
										false
									)}
								</>
							);
						}
					)}
			</tbody>
		</table>
	);
};
