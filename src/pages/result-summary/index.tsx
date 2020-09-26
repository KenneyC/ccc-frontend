import React from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from 'src/core/store/types';
import { AllItemSummary } from './components/all-item-summary';
import { ConstructionItemSummary } from './components/construction-item-summary';
import { SummaryData, SummaryType } from './types';

export const ResultSummary = () => {
	const summaryData: SummaryData = useSelector(
		(state: ApplicationState) => state.page.summaryData
	);

	return (
		<div className="page">
			<h1>Summary</h1>
			{summaryData.type === SummaryType.ALL ? (
				<AllItemSummary onClick={() => {}} />
			) : (
				<ConstructionItemSummary />
			)}
		</div>
	);
};
