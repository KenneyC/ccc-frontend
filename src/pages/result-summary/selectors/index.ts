import { ApplicationState } from "src/core/store/types";

export const getCompletedAnswers = (state: ApplicationState) =>
	state.questionnaire.completedAnswers;
