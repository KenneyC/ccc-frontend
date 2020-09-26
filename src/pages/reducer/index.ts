import { cloneDeep } from 'lodash';
import { GenericAction } from "src/core/store/types"
import { RouteNames, PageState } from '../../services/types';
import { ADD_SUMMARY_DATA, CLEAR_SUMMARY_DATA, UPDATE_CURRENT_PAGE } from '../actions';
import { SummaryData } from '../result-summary/types';

const initialState: PageState = {
	currentPage: RouteNames.START,
	summaryData: {},
};

const updateCurrentPage = (state: PageState, action: GenericAction<RouteNames>): PageState => {
	const newState = cloneDeep(state);
	newState.currentPage = action.payload;

	return newState;
};

const addSummaryData = (state: PageState, action: GenericAction<SummaryData>): PageState => {
	const newState = cloneDeep(state);
	newState.summaryData = action.payload;

	return newState;
};

const clearSummaryData = (state: PageState): PageState => {
	const newState = cloneDeep(state);
	newState.summaryData = {};

	return newState;
};

export const pageReducer = (state = initialState, action: GenericAction<any>) => {
	switch (action.type) {
		case UPDATE_CURRENT_PAGE:
			return updateCurrentPage(state, action);
		case ADD_SUMMARY_DATA:
			return addSummaryData(state, action);
		case CLEAR_SUMMARY_DATA:
			return clearSummaryData(state);
		default:
			return state;
	}
};
