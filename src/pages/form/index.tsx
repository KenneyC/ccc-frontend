import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SimpleButton } from 'src/components/button';
import { QuestionSection } from 'src/components/question-section';
import { ApplicationState } from 'src/core/store/types';
import { useNavigator } from 'src/services/helper';
import { RouteNames } from 'src/services/types';
import { addSummaryData } from '../actions';
import { SummaryType } from '../result-summary/types';

export const Form: React.FC = () => {
	const [navigate, dispatch] = [useNavigator(), useDispatch()];
	const [sectionsCompleted, setSectionsCompleted] = useState<boolean>(false);
	const selectedConstructionItem = useSelector(
		(state: ApplicationState) => state.questionnaire.selectedConstructionItem
	);
	const sections = useSelector(
		(state: ApplicationState) =>
			state.questionnaire.questionnaire.constructionItems[selectedConstructionItem]
	);
	const sectionStatuses = useSelector(
		(state: ApplicationState) => state.questionnaire.sectionStatuses[selectedConstructionItem]
	);
	const completedAnswers = useSelector(
		(state: ApplicationState) => state.questionnaire.completedAnswers
	);

	const handleContinue = () => {
		dispatch(
			addSummaryData({
				summaryData: completedAnswers,
				type: SummaryType.CONSTRUCTION_ITEM,
			})
		);
		navigate(RouteNames.QUSTIONNAIRE_SUMMARY);
	};

	useEffect(() => {
		const statuses = Object.values(sectionStatuses);
		if (!statuses.includes(false)) {
			setSectionsCompleted(true);
		} else {
			setSectionsCompleted(false);
		}
	}, [sectionStatuses, setSectionsCompleted]);

	return (
		<div className="questionnaire-form-wrapper page">
			<h2>
				Questions for{' '}
				{`${selectedConstructionItem
					.charAt(0)
					.toUpperCase()}${selectedConstructionItem.slice(1)}`}
			</h2>
			{Object.keys(sections).map((section: string) => (
				<QuestionSection
					sectionName={section}
					question={sections[section]}
					selectedConstructionItem={selectedConstructionItem}
				/>
			))}
			<SimpleButton text="Continue" onClick={handleContinue} disabled={!sectionsCompleted} />
		</div>
	);
};
