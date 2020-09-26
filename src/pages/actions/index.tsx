import { GenericAction } from 'src/core/store/types';
import { RouteNames } from '../../services/types';
import { SummaryData } from '../result-summary/types';

export const UPDATE_CURRENT_PAGE = 'UPDATE_CURRENT_PAGE';
export const ADD_SUMMARY_DATA = 'ADD_SUMMARY_DATA';
export const CLEAR_SUMMARY_DATA = 'CLEAR_SUMMARY_DATA';

export const updateCurrentPage = (payload: RouteNames): GenericAction<RouteNames> => {
	return {
		type: UPDATE_CURRENT_PAGE,
		payload,
	};
};

export const addSummaryData = (payload: SummaryData): GenericAction<SummaryData> => {
	return {
		type: ADD_SUMMARY_DATA,
		payload,
	};
};

export const clearSummaryData = (): GenericAction<any> => {
	return {
		type: CLEAR_SUMMARY_DATA,
	};
};
