import { cloneDeep } from 'lodash';
import { GenericAction } from "src/core/store/types"
import { RouteNames, PageState } from '../../services/types';
import { UPDATE_CURRENT_PAGE } from '../actions';

const initialState: PageState = {
	currentPage: RouteNames.START,
};

const updateCurrentPage = (state: PageState, action: GenericAction<RouteNames>): PageState => {
	const newState = cloneDeep(state);
	newState.currentPage = action.payload;

	return newState;
};

export const pageReducer = (state = initialState, action: GenericAction<RouteNames>) => {
	switch (action.type) {
		case UPDATE_CURRENT_PAGE:
			return updateCurrentPage(state, action);
		default:
			return state;
	}
};
