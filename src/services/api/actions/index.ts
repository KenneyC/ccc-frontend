import { GenericAction } from "src/core/store/types";
import { APIState } from "../types";

export const UPDATE_API_STATUS = 'UPDATE_API_STATUS';

export const updateApiStatus = (payload: APIState): GenericAction<APIState> => {
	return {
		type: UPDATE_API_STATUS,
		payload,
	};
};
