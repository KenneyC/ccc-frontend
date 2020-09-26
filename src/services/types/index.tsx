import React from 'react';
import { Form } from 'src/pages/form';
import { ResultSummary } from 'src/pages/result-summary';
import { SelectConstructionItems } from 'src/pages/select-construction-items';
import { Start } from '../../pages/start';

export enum RouteNames {
	START = '/',
	QUESTIONNAIRE = '/questionnaire',
	QUESTIONNAIRE_FORM = '/questionnaire/form',
	QUSTIONNAIRE_SUMMARY = '/questionnaire/summary',
}

interface RouteInfo {
	[key: string]: {
		route: any;
		name: string;
		component: React.ReactNode;
	};
}

export const Routes: RouteInfo = {
	START: {
		route: RouteNames.START,
		name: 'Select Construction Items',
		component: <Start />,
	},
	QUESTIONNAIRE: {
		route: RouteNames.QUESTIONNAIRE,
		name: 'Questionnaire',
		component: <SelectConstructionItems />,
	},
	QUESTIONNAIRE_FORM: {
		route: RouteNames.QUESTIONNAIRE_FORM,
		name: 'Questionniare form',
		component: <Form />,
	},
	QUSTIONNAIRE_SUMMARY: {
		route: RouteNames.QUSTIONNAIRE_SUMMARY,
		name: 'Summary',
		component: <ResultSummary />,
	},
};

export interface PageState {
	currentPage: RouteNames;
	summaryData: any;
}

export interface ConstructionItemDataRequestPayload {
	constructionItems: string[];
}
