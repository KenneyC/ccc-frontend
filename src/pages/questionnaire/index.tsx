import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigator } from 'src/services/helper';
import { ApplicationState } from 'src/core/store/types';
import { SelectConstructionItems } from './components/selectConstructionItems';

export const Questionnaire: React.FC = () => {
	const navigator = [useNavigator()];
	const constructionItems = useSelector(
		(state: ApplicationState) => state.questionnaire.questionnaire.constructionItems
	);

	return (
		<div className="questionnaire-wrapper">
			<SelectConstructionItems />
		</div>
	);
};
