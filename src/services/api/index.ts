import moment from 'moment';
import { saveAs } from 'file-saver';
import { CompletedAnswers, PDFTexts } from 'src/pages/form/types';
import { APIRoutes } from './routes';
import { QuestionnaireResponse } from './types';
import { preparePDFTextPayload } from './helpers';

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

export const submitQuestionnaire = async (pdfTexts: PDFTexts) => {
	const pdfTextPayload = preparePDFTextPayload(pdfTexts);
	const pdfResponse = await fetch(
		`${process.env.REACT_APP_API_URL}${APIRoutes.SUBMIT_QUESTIONNAIRE}`,
		{
			method: 'POST',
			headers: {
				Accept: 'application/zip',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(pdfTextPayload),
		}
	);

	const blob = await pdfResponse.blob();
	saveAs(blob, 'application-checklist.zip');
};
