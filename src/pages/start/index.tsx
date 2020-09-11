import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getConstructionItems, submitAndGetQuestions } from 'src/services/api/index';
import { ConstructionItems, QuestionnaireResponse } from 'src/services/api/types';
import { ConstructionItemsForm } from 'src/features/construction-items';
import { SimpleButton } from 'src/components/button';
import { ApplicationState } from 'src/core/store/types';
import { useNavigator } from '../../services/helper';
import { appendQuestionnaireData } from '../questionnaire/actions';
import { RouteNames } from '../../services/types';

export const Start: React.FC = () => {
	const [constructionItems, setConstructionItems] = useState<string[]>([]);
	const [navigate, dispatch] = [useNavigator(), useDispatch()];
	const selectedConstructionItems = useSelector(
		(state: ApplicationState) => state.constructionItems
	);

	const handleSumbit = (): void => {
		submitAndGetQuestions().then((data: QuestionnaireResponse) => {
			dispatch(appendQuestionnaireData(data));
		});
		navigate(RouteNames.QUESTIONNAIRE);
	};

	useEffect(() => {
		getConstructionItems().then((data: ConstructionItems) =>
			setConstructionItems(data.constructionItems)
		);
	}, []);

	return (
		<div className="start-wrapper">
			<span className="construction-items-title">
				What are the construction items in interest?
			</span>
			<ConstructionItemsForm constructionItems={constructionItems} />
			<SimpleButton onClick={handleSumbit} />
		</div>
	);
};
