import { ConstructionItemState } from "src/features/construction-items/types";
import { QuestionnaireFormState } from "src/pages/questionnaire/types";
import { PageState } from "src/services/types";

export interface ApplicationState {
	constructionItems: ConstructionItemState;
	questionnaire: QuestionnaireFormState;
	page: PageState;
}

export interface GenericAction<T> {
	type: string;
	payload: T;
}
