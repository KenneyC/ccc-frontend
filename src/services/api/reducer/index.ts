import { cloneDeep } from 'lodash';
import { GenericAction } from "src/core/store/types";
import { UPDATE_API_STATUS } from '../actions';
import { APIState } from '../types';

const initialAPIState: APIState = {
	loading: false,
	text: '',
};

const updateApiStatus = (state: APIState, action: GenericAction<APIState>) => {
	const newState = cloneDeep(state);
	newState.loading = action.payload.loading;
	newState.text = action.payload.text;

	return newState;
};

export const apiReducer = (state = initialAPIState, action: GenericAction<any>) => {
	switch (action.type) {
		case UPDATE_API_STATUS:
			return updateApiStatus(state, action);
		default:
			return state;
	}
};
