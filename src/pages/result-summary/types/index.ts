export enum SummaryType {
	CONSTRUCTION_ITEM = 'construction-item',
	ALL = 'all',
}

export interface SummaryData {
	type: SummaryType;
	summaryData: any;
}
