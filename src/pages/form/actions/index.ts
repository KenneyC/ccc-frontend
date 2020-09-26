import { GenericAction } from 'src/core/store/types';
import { QuestionnaireResponse } from 'src/services/api/types';
import { AnswerInput, SectionStatus, ResetSectionPayload } from '../types';

export const APPEND_QUSTIONNAIRE_DATA = 'APPEND_QUSTIONNAIRE_DATA';

export const UPDATE_QUESTIONNAIRE_ANSWER = 'UPDATE_QUESTIONNAIRE_ANSWER';

export const UPDATE_SELECTED_CONSTRUCTION_ITEM = 'UPDATE_SELECTED_CONSTRUCTION_ITEM';

export const UPDATE_SECTION_STATUS = 'UPDATE_SECTION_STATUS';

export const RESET_SECTION_ANSWER = 'RESET_SECTION_ANSWER';

export const appendQuestionnaireData = (
	payload: QuestionnaireResponse
): GenericAction<QuestionnaireResponse> => {
	return {
		type: APPEND_QUSTIONNAIRE_DATA,
		payload,
	};
};

export const updateQuestionnaireAnswer = (payload: AnswerInput): GenericAction<AnswerInput> => {
	return {
		type: UPDATE_QUESTIONNAIRE_ANSWER,
		payload,
	};
};

export const updateSelectedConstructionItem = (payload: string): GenericAction<string> => {
	return {
		type: UPDATE_SELECTED_CONSTRUCTION_ITEM,
		payload,
	};
};

export const updateSectionStatus = (payload: SectionStatus): GenericAction<SectionStatus> => {
	return {
		type: UPDATE_SECTION_STATUS,
		payload,
	};
};

export const resetSectionAnswer = (
	payload: ResetSectionPayload
): GenericAction<ResetSectionPayload> => {
	return {
		type: RESET_SECTION_ANSWER,
		payload,
	};
};
