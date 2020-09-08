import { APIRoutes } from './routes';
import { isDev } from '../helper';
import { ConstructionItemsResponse } from './types';
import mockConstructionData from '../../assets/mock/sampleCI.json';

export const getConstructionItems = async (): Promise<ConstructionItemsResponse> => {
	if (isDev()) {
		const responseData = await new Promise<Response>((resolve) => resolve(new Response(JSON.stringify(mockConstructionData))));
		return responseData.json();
	} else {
		return {
			constructionItems: []
		}
	}
};
