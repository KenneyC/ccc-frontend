export interface ConstructionItemState {
	selected: string[];
	items: string[];
}

export interface ConstructionItemAction {
	type: string;
	payload: string;
}
