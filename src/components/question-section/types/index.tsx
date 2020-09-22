import { Question } from "src/pages/questionnaire/types";

export interface QuestionStackItem {
	questions: Question[];
	index: number;
}
