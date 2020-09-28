import { cloneDeep } from 'lodash';
import { GenericAction } from "src/core/store/types"
import { QuestionnaireResponse } from 'src/services/api/types';
import { AnswerInput, QuestionnaireFormState, SectionStatus, ResetSectionPayload, PDFTextPayload } from '../types';
import {
	appendPDFText,
	APPEND_PDF_TEXTS,
	APPEND_QUSTIONNAIRE_DATA,
	RESET_SECTION_ANSWER,
	UPDATE_QUESTIONNAIRE_ANSWER,
	UPDATE_SECTION_STATUS,
	UPDATE_SELECTED_CONSTRUCTION_ITEM,
} from '../actions';
import {
	initialiseSections,
	translateToQuestionnaireData,
	updateNestedAnswerTree,
} from '../helper';

export const initialState: QuestionnaireFormState = {
	questionnaire: {
		constructionItems: {},
	},
	selectedConstructionItem: '',
	completedAnswers: {},
	sectionStatuses: {},
	pdfTexts: {},
};

const appendQuestionnaireData = (
	state: QuestionnaireFormState,
	action: GenericAction<QuestionnaireResponse>
) => {
	const newState = cloneDeep(state);
	const formData = translateToQuestionnaireData(action.payload);
	const [sectionStatuses, completedAnswers, pdfText] = initialiseSections(action.payload);
	newState.questionnaire = formData;
	newState.sectionStatuses = sectionStatuses;
	newState.completedAnswers = completedAnswers;
	newState.pdfTexts = pdfText;

	return newState;
};

const updateQuestionnaireAnswer = (
	state: QuestionnaireFormState,
	action: GenericAction<AnswerInput>
) => {
	const newState = cloneDeep(state);
	const completedAnswers =
		newState.completedAnswers[action.payload.constructionItem][action.payload.section];
	const initialParent = action.payload.parentQuestions.pop();

	if (initialParent) {
		updateNestedAnswerTree(
			completedAnswers[initialParent],
			action.payload,
			action.payload.parentQuestions
		);
	} else {
		completedAnswers[action.payload.question] = {
			answer: action.payload.answer,
			subQuestionAnswers: {},
		};
	}

	return newState;
};

const updateSelectedConstructionItem = (
	state: QuestionnaireFormState,
	action: GenericAction<string>
) => {
	const newState = cloneDeep(state);
	newState.selectedConstructionItem = action.payload;

	return newState;
};

const updateSectionStatus = (
	state: QuestionnaireFormState,
	action: GenericAction<SectionStatus>
) => {
	const newState = cloneDeep(state);
	const sectionStatuses = newState.sectionStatuses[action.payload.constructionItem];

	if (sectionStatuses !== undefined) {
		sectionStatuses[action.payload.section] = action.payload.status;
	} else {
		newState.sectionStatuses[action.payload.constructionItem] = {
			[action.payload.section]: action.payload.status,
		};
	}

	return newState;
};

const resetSectionAnswer = (
	state: QuestionnaireFormState,
	action: GenericAction<ResetSectionPayload>
) => {
	const newState = cloneDeep(state);
	newState.completedAnswers[action.payload?.constructionItem][action.payload?.section] = {};
	newState.pdfTexts[action.payload?.constructionItem][action.payload?.section] = [];

	return newState;
};

const appendPDFTexts = (state: QuestionnaireFormState, action: GenericAction<PDFTextPayload>) => {
	const newState = cloneDeep(state);
	newState.pdfTexts[action.payload.constructionItem][action.payload.section].push(
		action.payload.pdfText
	);

	return newState;
};

export const startPageReducer = (
	state: QuestionnaireFormState = initialState,
	action: GenericAction<any>
) => {
	switch (action.type) {
		case APPEND_QUSTIONNAIRE_DATA:
			return appendQuestionnaireData(state, action);
		case UPDATE_QUESTIONNAIRE_ANSWER:
			return updateQuestionnaireAnswer(state, action);
		case UPDATE_SELECTED_CONSTRUCTION_ITEM:
			return updateSelectedConstructionItem(state, action);
		case UPDATE_SECTION_STATUS:
			return updateSectionStatus(state, action);
		case RESET_SECTION_ANSWER:
			return resetSectionAnswer(state, action);
		case APPEND_PDF_TEXTS:
			return appendPDFTexts(state, action);
		default:
			return state;
	}
};
