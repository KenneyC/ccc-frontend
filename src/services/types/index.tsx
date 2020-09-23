import React from 'react';
import { Questionnaire } from 'src/pages/questionnaire';
import { Start } from '../../pages/start';

export enum RouteNames {
	START = '/',
	QUESTIONNAIRE = '/questionnaire',
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
		component: <Questionnaire />,
	},
};

export interface PageState {
	currentPage: RouteNames;
}

export interface ConstructionItemDataRequestPayload {
	constructionItems: string[];
}
