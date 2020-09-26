import React from 'react';
import { SimpleButton } from 'src/components/button';
import { Answer, Question } from 'src/pages/form/types';

interface QuestionProps {
	onClick: (question: Question, answerIndex: number) => void;
	question?: Question;
}

export const QuestionAndAnswer: React.FC<QuestionProps> = (props: QuestionProps) => {
	const { question, onClick } = props;

	return (
		<div className="questionnaire-form-question-section-answer-body">
			<h3>{question?.text}</h3>
			<div className="questionnaire-form-answer-buttons-wrapper">
				{question?.answers.map((answer: Answer, index: number) => {
					return (
						<SimpleButton text={answer.text} onClick={() => onClick(question, index)} />
					);
				})}
			</div>
		</div>
	);
};
