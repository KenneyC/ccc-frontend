import { GenericAction } from 'src/core/store/types';
import { QuestionnaireResponse } from 'src/services/api/types';
import { QuestionnaireForm, AnswerInput } from '../types';

export const APPEND_QUSTIONNAIRE_DATA = 'APPEND_QUSTIONNAIRE_DATA';

export const UPDATE_QUESTIONNAIRE_ANSWER = 'UPDATE_QUESTIONNAIRE_ANSWER';

export const appendQuestionnaireData = (
	payload: QuestionnaireResponse
): GenericAction<QuestionnaireResponse> => {
	return {
		type: APPEND_QUSTIONNAIRE_DATA,
		payload,
	};
};

export const updateQuestionnaireData = (payload: AnswerInput): GenericAction<AnswerInput> => {
	return {
		type: UPDATE_QUESTIONNAIRE_ANSWER,
		payload,
	};
};
