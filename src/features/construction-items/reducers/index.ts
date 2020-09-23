import { remove, cloneDeep } from 'lodash';
import { GenericAction } from 'src/core/store/types';
import {
	APPEND_TO_CONSTRUCTION_ITEMS,
	APPEND_TO_SELECTED_CONSTRUCTION_ITEMS,
	REMOVE_FROM_SELECTED_CONSTRUCTION_ITEMS,
} from '../actions';
import { ConstructionItemState } from '../types';

const initialState: ConstructionItemState = {
	selected: [],
	items: [],
};

const appendToSelectedConstructionItems = (
	state: ConstructionItemState,
	action: GenericAction<string>
) => {
	const newState: ConstructionItemState = cloneDeep(state);
	newState.selected.push(action.payload);

	return newState;
};

const removeFromSelectedConstructionItems = (
	state: ConstructionItemState,
	action: GenericAction<string>
) => {
	const newState: ConstructionItemState = cloneDeep(state);
	remove(newState.selected, (constructionItem: string) => {
		return constructionItem === action.payload;
	});

	return newState;
};

const appendToConstructionItems = (
	state: ConstructionItemState,
	action: GenericAction<string[]>
) => {
	const newState = cloneDeep(state);
	newState.items = action.payload;

	return newState;
}

export const constructionItemsReducer = (state = initialState, action: GenericAction<any>) => {
	switch (action.type) {
		case APPEND_TO_SELECTED_CONSTRUCTION_ITEMS:
			return appendToSelectedConstructionItems(state, action);
		case REMOVE_FROM_SELECTED_CONSTRUCTION_ITEMS:
			return removeFromSelectedConstructionItems(state, action);
		case APPEND_TO_CONSTRUCTION_ITEMS:
			return appendToConstructionItems(state, action);
		default:
			return state;
	}
};
