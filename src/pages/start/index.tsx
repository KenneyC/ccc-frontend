import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getConstructionItems, submitAndGetQuestions } from 'src/services/api/index';
import { QuestionnaireResponse } from 'src/services/api/types';
import { ConstructionItemsForm } from 'src/features/construction-items';
import { SimpleButton } from 'src/components/button';
import { ApplicationState } from 'src/core/store/types';
import { useAPIHelper } from 'src/services/api/hooks';
import { appendToConstructionItems } from 'src/features/construction-items/actions';
import { useNavigator } from '../../services/helper';
import { appendQuestionnaireData } from '../form/actions';
import { RouteNames } from '../../services/types';

export const Start: React.FC = () => {
	const [navigate, dispatch] = [useNavigator(), useDispatch()];
	const [call] = useAPIHelper('Retrieving construction data...');
	const constructionItems = useSelector(
		(state: ApplicationState) => state.constructionItems.items
	);
	const selectedConstructionItems: string[] = useSelector(
		(state: ApplicationState) => state.constructionItems.selected
	);

	const handleSumbit = (): void => {
		call(submitAndGetQuestions, [selectedConstructionItems]).then(
			(data: QuestionnaireResponse) => {
				dispatch(appendQuestionnaireData(data));
			}
		);
		navigate(RouteNames.QUESTIONNAIRE);
	};

	useEffect(() => {
		if (!constructionItems.length) {
			call(getConstructionItems, []).then((data: string[]) => {
				dispatch(appendToConstructionItems(data));
			});
		}
	}, []);

	return (
		<div className="start-wrapper page">
			<span className="construction-items-title">
				What are the construction items in interest?
			</span>
			<ConstructionItemsForm constructionItems={constructionItems} />
			<SimpleButton onClick={handleSumbit} text="Submit and Continue" />
		</div>
	);
};
