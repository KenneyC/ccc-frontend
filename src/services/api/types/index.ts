export interface ConstructionItems {
	constructionItems: string[];
}

export interface QuestionnaireItem {
	text: string;
	type: string;
	finalAnswer?: string;
	pdfText?: string;
	children?: QuestionnaireItem[];
}

export interface QuestionnaireResponse {
	constructionItems: QuestionnaireItem[];
}

export interface APIState {
	loading: boolean;
	text: string;
}

export enum QuestionnaireItemType {
	ANSWER = 'answer',
	QUESTION = 'question',
	LEADING_QUESTION = 'leading-question',
	FINAL_ANSWER = 'final-answer',
}

export interface PDFTextSubmitPayloadItem {
	text: string;
	children?: any[];
}
