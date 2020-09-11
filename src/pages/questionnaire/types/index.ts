export interface Question {
	text: string;
	// eslint-disable-next-line no-use-before-define
	answers?: Answer[];
}

export interface Answer {
	text: string;
	questions?: Question[];
	finalAnswer?: string;
}

export interface Section {
	questions?: Question[];
}

export interface ConstructionItemQuestionnaire {
	[key: string]: Section;
}

export interface QuestionnaireForm {
	constructionItems: ConstructionItemQuestionnaire;
}

export interface AnswerInput {
	constructionItem: string;
	question: string;
	answer: string;
}

export interface CompletedAnswers {
	[key: string]: {
		[key: string]: {
			answer: string;
		};
	};
}

export interface QuestionnaireFormState {
	questionnaire: QuestionnaireForm;
	completedAnswers: CompletedAnswers;
}
