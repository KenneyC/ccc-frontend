import { GenericAction } from 'src/core/store/types';
import { RouteNames } from '../../services/types';

export const UPDATE_CURRENT_PAGE = 'UPDATE_CURRENT_PAGE';

export const updateCurrentPage = (payload: RouteNames): GenericAction<RouteNames> => {
	return {
		type: UPDATE_CURRENT_PAGE,
		payload,
	};
};
