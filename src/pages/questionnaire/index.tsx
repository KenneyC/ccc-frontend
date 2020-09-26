import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigator } from 'src/services/helper';
import { ApplicationState } from 'src/core/store/types';
import { SimpleButton } from 'src/components/button';
import { SelectConstructionItems } from 'src/pages/select-construction-items';
import { Form } from '../../features/form';
import { SummaryTable } from './components/summary-table';
import { updateSelectedConstructionItem } from './actions';

export const Questionnaire: React.FC = () => {
	const navigator = [useNavigator()];
	const dispatch = useDispatch();
	const [isSummary, setIsSummary] = useState<boolean>(false);
	const [questionsFinished, setQuestionsFinished] = useState<boolean>(false);
	const [selectedConstructionItem, sectionStatuses] = useSelector((state: ApplicationState) => [
		state.questionnaire.questionnaire.constructionItems[
			state.questionnaire.selectedConstructionItem
		],
		state.questionnaire.sectionStatuses,
	]);

	const handleConfirmClick = () => {
		setIsSummary(false);
		dispatch(updateSelectedConstructionItem(null));
		const questionnaireNotFinishedStatuses = Object.values(
			sectionStatuses
		).map((constructionItemStatuses) =>
			Object.values(constructionItemStatuses).includes(false)
		);
		if (!questionnaireNotFinishedStatuses.includes(true)) setQuestionsFinished(true);
	};

	return (
		<div className="questionnaire-wrapper page">
			{selectedConstructionItem == null && !isSummary && <SelectConstructionItems />}
			{isSummary && <SummaryTable onClick={handleConfirmClick} />}
			<div className="questionnaire-button">
				<SimpleButton text="Continue" disabled={!questionsFinished} onClick={() => {}} />
			</div>
		</div>
	);
};
