import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SimpleButton } from 'src/components/button';
import { AnswerSummaryTable } from 'src/components/question-section/components/summary-table';
import { clearSummaryData } from 'src/pages/actions';
import { getCompletedAnswers } from '../selectors';

interface SummaryTableProps {
	onClick: () => void;
}

export const AllItemSummary: React.FC<SummaryTableProps> = (props: SummaryTableProps) => {
	const { onClick } = props;
	const dispatch = useDispatch();
	const completedAnswers = useSelector(getCompletedAnswers);

	useEffect(() => {
		return () => dispatch(clearSummaryData());
	}, []);

	return (
		<div className="summary-table-wrapper">
			{Object.keys(completedAnswers).map((constructionItem: string) => {
				const sections = completedAnswers[constructionItem];
				return (
					<div>
						<h2>{`${constructionItem.charAt(0).toUpperCase()}${constructionItem.slice(
							1
						)}`}</h2>
						{Object.keys(sections).map((section: string) => {
							return (
								<div>
									<h3>{section}</h3>
									<AnswerSummaryTable
										selectedConstructionItem={constructionItem}
										sectionName={section}
									/>
								</div>
							);
						})}
					</div>
				);
			})}
			<SimpleButton text="Confirm and Continue" onClick={onClick} />
		</div>
	);
};
