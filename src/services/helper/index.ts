import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RouteNames } from 'src/services/types';
import { updateCurrentPage } from 'src/pages/actions';

export const isDev = (): boolean => {
	return !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
};

export const useNavigator = () => {
	const [history, dispatch] = [useHistory(), useDispatch()];

	useEffect(() => {
		dispatch(updateCurrentPage(history.location.pathname as RouteNames));
	}, []);

	const navigate = (path: RouteNames): void => {
		history.push(path);
		dispatch(updateCurrentPage(path));
	};

	return navigate;
};
