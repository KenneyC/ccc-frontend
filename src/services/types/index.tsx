import React from 'react';
import { Form } from 'src/features/form';
import { Questionnaire } from 'src/pages/questionnaire';
import { SelectConstructionItems } from 'src/pages/select-construction-items';
import { Start } from '../../pages/start';

export enum RouteNames {
	START = '/',
	QUESTIONNAIRE = '/questionnaire',
	QUESTIONNAIRE_FORM = '/questionnaire/form',
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
		name: '1. Select Construction Items',
		component: <Start />,
	},
	QUESTIONNAIRE: {
		route: RouteNames.QUESTIONNAIRE,
		name: '2. Questionnaire',
		component: <SelectConstructionItems />,
	},
	QUESTIONNAIRE_FORM: {
		route: RouteNames.QUESTIONNAIRE_FORM,
		name: '3. Questionniare form',
		component: <Form />,
	},
};

export interface PageState {
	currentPage: RouteNames;
}

export interface ConstructionItemDataRequestPayload {
	constructionItems: string[];
}
