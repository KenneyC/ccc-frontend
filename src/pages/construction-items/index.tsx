import React, { useEffect, useState } from 'react';

export const ConstructionItems: React.FC = () => {
	const [ constructionItems, setConstructionItems ] = useState(null);

	useEffect(() => {
		//setConstructionItems();
	}, []);

	return <span>Hello this is an example</span>;
};
