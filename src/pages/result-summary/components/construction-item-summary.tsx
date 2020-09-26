import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SimpleButton } from 'src/components/button';
import { AnswerSummaryTable } from 'src/components/question-section/components/summary-table';
import { clearSummaryData } from 'src/pages/actions';
import { useNavigator } from 'src/services/helper';
import { RouteNames } from 'src/services/types';
import { getCompletedAnswers } from '../selectors';

export const ConstructionItemSummary = () => {
	const [navigate, dispatch] = [useNavigator(), useDispatch()];
	const completedAnswers = useSelector(getCompletedAnswers);
	const constructionItemName = Object.keys(completedAnswers)[0];

	const handleContinue = () => {
		navigate(RouteNames.QUESTIONNAIRE);
	};

	useEffect(() => {
		return () => dispatch(clearSummaryData());
	}, []);

	return (
		<div className="">
			{Object.keys(completedAnswers[constructionItemName]).map((section: string) => {
				return (
					<>
						<h3>{section}</h3>
						<AnswerSummaryTable
							selectedConstructionItem={constructionItemName}
							sectionName={section}
						/>
					</>
				);
			})}
			<SimpleButton text="Confirm and Continue" onClick={handleContinue} />
		</div>
	);
};
