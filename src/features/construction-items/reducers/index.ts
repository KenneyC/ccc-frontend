import { remove, cloneDeep } from 'lodash';
import { APPEND_TO_CONSTRUCTION_ITEMS, REMOVE_FROM_CONSTRUCTION_ITEMS } from '../actions';
import { ConstructionItemState, ConstructionItemAction } from '../types';

const initialState: ConstructionItemState = {
	selected: [],
};

const appendToConstructionItems = (
	state: ConstructionItemState,
	action: ConstructionItemAction
) => {
	const newState: ConstructionItemState = cloneDeep(state);
	newState.selected.push(action.payload);

	return newState;
};

const removeFromConstructionItems = (
	state: ConstructionItemState,
	action: ConstructionItemAction
) => {
	const newState: ConstructionItemState = cloneDeep(state);
	remove(newState.selected, (constructionItem: string) => {
		return constructionItem === action.payload;
	});

	return newState;
};

export const constructionItemsReducer = (state = initialState, action: ConstructionItemAction) => {
	switch (action.type) {
		case APPEND_TO_CONSTRUCTION_ITEMS:
			return appendToConstructionItems(state, action);
		case REMOVE_FROM_CONSTRUCTION_ITEMS:
			return removeFromConstructionItems(state, action);
		default:
			return state;
	}
};
