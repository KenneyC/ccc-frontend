import { QuestionnaireResponse, QuestionnaireItem } from "src/services/api/types";
import {
	QuestionnaireForm,
	ConstructionItemQuestionnaire,
	Section,
	Question,
	Answer,
	SectionStatuses,
	CompletedAnswers,
	CompletedAnswer,
	AnswerInput,
} from '../types';

enum ObjectType {
	QUESTION = 'question',
	ANSWER = 'answer',
}

export const translateToQuestionnaireData = (
	responseData: QuestionnaireResponse
): QuestionnaireForm => {
	const formData: QuestionnaireForm = {
		constructionItems: {},
	};

	const pushObject = (
		children: QuestionnaireItem[],
		parent?: Section & Answer & Question,
		type?: ObjectType
	) => {
		let newChild: Question | Answer;
		children.forEach((child) => {
			if (type === ObjectType.QUESTION) {
				newChild = {
					text: child.text,
					answers: [],
				};

				if (child.children !== undefined && child?.children?.length > 0) {
					// eslint-disable-next-line no-use-before-define
					pushObject(
						child.children,
						newChild as Section & Answer & Question,
						ObjectType.ANSWER
					);
				}

				parent?.questions?.push(newChild);
			} else {
				newChild = {
					text: child.text,
					questions: [],
				};

				if (child.children !== undefined && child?.children.length > 0) {
					pushObject(
						child.children,
						newChild as Section & Answer & Question,
						ObjectType.QUESTION
					);
				}

				parent?.answers?.push(newChild);
			}
		});
	};

	responseData.constructionItems.forEach((constructionItem: QuestionnaireItem) => {
		// Top layer: the construction item
		const newConstructionItem: ConstructionItemQuestionnaire = {};

		// First layer: section.
		constructionItem.children?.forEach((section) => {
			const newSection: Section = {
				questions: [],
			};

			if (section.children !== undefined)
				pushObject(
					section.children,
					newSection as Section & Answer & Question,
					ObjectType.QUESTION
				);

			newConstructionItem[section.text] = newSection;
		});

		formData.constructionItems[constructionItem.text] = newConstructionItem;
	});

	return formData;
};

export const initialiseSections = (
	responseData: QuestionnaireResponse
): [SectionStatuses, CompletedAnswers] => {
	const sectionStatuses: SectionStatuses = {};
	const completedAnswers: CompletedAnswers = {};

	responseData.constructionItems.forEach((constructionItem: QuestionnaireItem) => {
		const initialSectionStatuses = {};
		const initialCompletedAnswers = {};

		constructionItem.children.forEach((question: QuestionnaireItem) => {
			initialSectionStatuses[question.text] = false;
			initialCompletedAnswers[question.text] = {};
		});

		sectionStatuses[constructionItem.text] = initialSectionStatuses;
		completedAnswers[constructionItem.text] = initialCompletedAnswers;
	});

	return [sectionStatuses, completedAnswers];
};

export const updateNestedAnswerTree = (
	currentAnswer: CompletedAnswer,
	answerInput: AnswerInput,
	parentQuestions?: string[]
) => {
	const parentID = parentQuestions.pop();

	if (parentID) {
		const parent = currentAnswer.subQuestionAnswers[parentID];
		updateNestedAnswerTree(parent, answerInput, parentQuestions);
	} else {
		const newCompletedAnswer: CompletedAnswer = {
			answer: answerInput.answer,
			subQuestionAnswers: {},
		};
		currentAnswer.subQuestionAnswers[answerInput.question] = newCompletedAnswer;
	}
};
