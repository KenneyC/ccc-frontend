import { APIRoutes } from './routes';
import { isDev } from '../helper';
import { ConstructionItems, QuestionnaireResponse } from './types';
import mockConstructionData from '../../assets/mock/sampleCI.json';
import mockQuestionaireData from '../../assets/mock/sampleQuestions.json';

export const getConstructionItems = async (): Promise<ConstructionItems> => {
	if (isDev()) {
		const responseData = await new Promise<Response>((resolve) =>
			resolve(new Response(JSON.stringify(mockConstructionData)))
		);
		return responseData.json();
	}
	return {
		constructionItems: [],
	};
};

export const submitAndGetQuestions = async (): Promise<QuestionnaireResponse> => {
	if (isDev()) {
		const responseData = await new Promise<Response>((resolve) =>
			resolve(new Response(JSON.stringify(mockQuestionaireData)))
		);
		return responseData.json();
	}
	return {
		constructionItems: [],
	};
};
