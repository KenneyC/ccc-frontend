import { APIRoutes } from './routes';
import { QuestionnaireResponse } from './types';

export const getConstructionItems = async (): Promise<string[]> => {
	const constructionItemResponse = await fetch(
		`${process.env.REACT_APP_API_URL}${APIRoutes.CONSTRUCTION_ITEMS_NAMES}`,
		{
			method: 'GET',
		}
	);
	const constructionItems = await constructionItemResponse.json();
	return constructionItems;
};

export const submitAndGetQuestions = async (
	selectedItems: string[]
): Promise<QuestionnaireResponse> => {
	const constructionItemDataResponse = await fetch(
		`${process.env.REACT_APP_API_URL}${APIRoutes.CONSTRUCTION_ITEMS_DATA}`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(selectedItems),
		}
	);

	const constructionItemData = await constructionItemDataResponse.json();
	return {
		constructionItems: constructionItemData,
	};
};
