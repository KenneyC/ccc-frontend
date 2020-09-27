import { useDispatch } from 'react-redux';
import { updateApiStatus } from '../actions';
import { APIState } from '../types';

export const useAPIHelper = (text?: string) => {
	const dispatch = useDispatch();

	const call = async (apiFunction: any, args: any): Promise<any> => {
		const newApiState: APIState = {
			loading: true,
			text,
		};
		dispatch(updateApiStatus(newApiState));
		const response = await apiFunction(...args);
		newApiState.loading = false;
		dispatch(updateApiStatus(newApiState));
		return response;
	};

	return [call];
};
