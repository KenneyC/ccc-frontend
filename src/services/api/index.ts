import { APIRoutes } from './routes';

const getConstructionItems = async (): Promise<Response> => {
	return await fetch(APIRoutes.CONSTRUCTION_ITEMS);
};
