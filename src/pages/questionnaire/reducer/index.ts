import { cloneDeep } from 'lodash';
import { GenericAction } from "src/core/store/types"
import { QuestionnaireResponse } from 'src/services/api/types';
import { AnswerInput, QuestionnaireFormState, QuestionnaireForm } from '../types';
import { APPEND_QUSTIONNAIRE_DATA, UPDATE_QUESTIONNAIRE_ANSWER } from '../actions';
import { translateToQuestionnaireData } from '../helper';

export const initialState: QuestionnaireFormState = {
	questionnaire: {
		constructionItems: {},
	},
	completedAnswers: {},
};

const appendQuestionnaireData = (
	state: QuestionnaireFormState,
	action: GenericAction<QuestionnaireResponse>
) => {
	const newState = cloneDeep(state);
	const formData = translateToQuestionnaireData(action.payload);
	newState.questionnaire = formData;

	return newState;
};

const updateQuestionnaireAnswer = (
	state: QuestionnaireFormState,
	action: GenericAction<AnswerInput>
) => {
	const newState = cloneDeep(state);
	newState.completedAnswers[action.payload.constructionItem][action.payload.question].answer =
		action.payload.answer;

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
		default:
			return state;
	}
};
