import { cloneDeep, isEqual } from 'lodash';
import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ApplicationState } from 'src/core/store/types';
import {
	resetSectionAnswer,
	updateQuestionnaireAnswer,
	updateSectionStatus,
} from 'src/pages/form/actions';
import { AnswerInput, Question, Section } from 'src/pages/form/types';
import { SimpleButton } from '../button';
import { StepTracker } from '../step-tracker';
import { QuestionAndAnswer } from './components/question-and-answer';
import { AnswerSummaryTable } from './components/summary-table';
import { QuestionStackItem } from './types';

interface QuestionSectionProps {
	selectedConstructionItem: string;
	sectionName: string;
	question: Section;
}

export const QuestionSection: React.FC<QuestionSectionProps> = (props: QuestionSectionProps) => {
	const { sectionName, question, selectedConstructionItem } = props;
	const [currentQuestionNumber, setCurrentQuestionNumber] = useState<number>(0);
	const [questionStack, setQuestionStack] = useState<QuestionStackItem[]>([
		{
			questions: question.questions,
			index: currentQuestionNumber,
		},
	]);
	const [currentQuestions, setCurrentQuestions] = useState<Question[]>(question.questions);
	const finished = useSelector(
		(state: ApplicationState) =>
			state.questionnaire?.sectionStatuses[selectedConstructionItem][sectionName]
	);
	const dispatch = useDispatch();

	const handleRestartClick = useCallback(() => {
		setCurrentQuestionNumber(0);
		setCurrentQuestions(question.questions);
		setQuestionStack([
			{
				questions: question.questions,
				index: 0,
			},
		]);
		dispatch(
			updateSectionStatus({
				section: sectionName,
				constructionItem: selectedConstructionItem,
				status: false,
			})
		);
		dispatch(
			resetSectionAnswer({
				constructionItem: selectedConstructionItem,
				section: sectionName,
			})
		);
	}, [setCurrentQuestionNumber, setQuestionStack, currentQuestionNumber]);

	const handleAnswerClick = useCallback(
		(currentQuestion: Question, answerIndex: number) => {
			const parentQuestions: string[] = [];

			questionStack.forEach((questionStackItem: QuestionStackItem, index: number) => {
				if (
					currentQuestion.text !==
					questionStackItem.questions[questionStackItem.index].text
				) {
					parentQuestions.push(questionStackItem.questions[questionStackItem.index].text);
				}
			});

			const answerInput: AnswerInput = {
				constructionItem: selectedConstructionItem,
				question: currentQuestion.text,
				section: sectionName,
				answer: currentQuestion.answers[answerIndex].text,
				parentQuestions,
			};

			dispatch(updateQuestionnaireAnswer(answerInput));

			// Go to sub queston
			if (currentQuestion.answers[answerIndex].questions?.length) {
				if (!isEqual(questionStack[questionStack.length - 1].questions, currentQuestions)) {
					setQuestionStack([
						...questionStack,
						{
							questions: currentQuestions,
							index: currentQuestionNumber,
						},
					]);
				}
				setCurrentQuestions(
					currentQuestions[currentQuestionNumber].answers[answerIndex].questions
				);
				setCurrentQuestionNumber(0);
			} else if (currentQuestions[currentQuestionNumber + 1] !== undefined) {
				setCurrentQuestionNumber(currentQuestionNumber + 1);
				if (questionStack.length === 1) {
					const incrementNewStack = cloneDeep(questionStack);
					incrementNewStack[0].index += 1;
					setQuestionStack(incrementNewStack);
				}
			} else if (
				questionStack.length > 0 &&
				questionStack[questionStack.length - 1].index + 1 <
					questionStack[questionStack.length - 1].questions.length &&
				questionStack[questionStack.length - 1] !== undefined
			) {
				setCurrentQuestions(questionStack[questionStack.length - 1].questions);
				setCurrentQuestionNumber(questionStack[questionStack.length - 1].index + 1);
				const filterLastElement = questionStack.filter(
					(stack, index) => index !== questionStack.length - 1
				);
				if (filterLastElement.length) {
					filterLastElement[filterLastElement.length - 1].index++;
				}
				setQuestionStack(filterLastElement);
			} else {
				setQuestionStack([]);
				setCurrentQuestionNumber(0);
				setCurrentQuestions([]);
				dispatch(
					updateSectionStatus({
						section: sectionName,
						constructionItem: selectedConstructionItem,
						status: true,
					})
				);
			}
		},
		[
			currentQuestionNumber,
			setCurrentQuestionNumber,
			setCurrentQuestions,
			setQuestionStack,
			dispatch,
			question.questions,
			sectionName,
			selectedConstructionItem,
		]
	);

	return (
		<div className="questionnaire-form-question-section-wrapper">
			<div
				className={`questionnaire-form-question-section-title ${
					finished ? 'questionnaire-form-question-section-complete' : ''
				}`}>
				<span>{sectionName}</span>
			</div>
			<div className="questionnaire-form-question-section-body">
				<StepTracker
					currentStep={
						questionStack[0] !== undefined
							? questionStack[0].index
							: currentQuestionNumber
					}
					maxStep={question.questions.length}
					finished={finished}
				/>
				{!finished ? (
					<QuestionAndAnswer
						question={currentQuestions[currentQuestionNumber]}
						onClick={handleAnswerClick}
					/>
				) : (
					<h3>Summary</h3>
				)}
				<AnswerSummaryTable
					sectionName={sectionName}
					selectedConstructionItem={selectedConstructionItem}
				/>
				{finished && <SimpleButton text="Restart" onClick={handleRestartClick} />}
			</div>
		</div>
	);
};
