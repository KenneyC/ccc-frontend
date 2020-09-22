import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigator } from 'src/services/helper';
import { ApplicationState } from 'src/core/store/types';
import { SelectConstructionItems } from './components/selectConstructionItems';
import { Form } from '../../features/form';
import { SummaryTable } from './components/summary-table';

export const Questionnaire: React.FC = () => {
	const navigator = [useNavigator()];
	const [isSummary, setIsSummary] = useState<boolean>(false);
	const selectedConstructionItem = useSelector(
		(state: ApplicationState) =>
			state.questionnaire.questionnaire.constructionItems[
				state.questionnaire.selectedConstructionItem
			]
	);

	return (
		<div className="questionnaire-wrapper page">
			{selectedConstructionItem == null && !isSummary && <SelectConstructionItems />}
			{selectedConstructionItem != null && !isSummary && (
				<Form sections={selectedConstructionItem} onContinue={() => setIsSummary(true)} />
			)}
			{isSummary && <SummaryTable />}
		</div>
	);
};
