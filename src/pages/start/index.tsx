import React, { useEffect, useState } from 'react';
import { getConstructionItems } from 'src/services/api/index';
import { ConstructionItemsResponse } from 'src/services/api/types';
import { ConstructionItems } from 'src/features/construction-items';

export const Start: React.FC = () => {
	const [ constructionItems, setConstructionItems ] = useState<string[]>([]);

	useEffect(() => {
		getConstructionItems().then((data: ConstructionItemsResponse) => setConstructionItems(data.constructionItems));
	}, []);

	return <div>
		<ConstructionItems constructionItems={constructionItems} />
	</div>;
};
