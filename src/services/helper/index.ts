export const isDev = (): boolean => {
	console.log(process.env);
	return !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
};
