import { GenericAction } from 'src/core/store/types';
import { ConstructionItemAction } from '../types';

export const APPEND_TO_SELECTED_CONSTRUCTION_ITEMS = 'APPEND_TO_SELECTED_CONSTRUCTION_ITEMS';
export const REMOVE_FROM_SELECTED_CONSTRUCTION_ITEMS = 'REMOVE_FROM_SELECTED_CONSTRUCTION_ITEMS';
export const APPEND_TO_CONSTRUCTION_ITEMS = 'APPEND_TO_CONSTRUCTION_ITEMS';

export const appendToConstructionItems = (payload: string[]): GenericAction<string[]> => {
	return {
		type: APPEND_TO_CONSTRUCTION_ITEMS,
		payload,
	};
};

export const appendToSelectedConstructionItems = (payload: string): ConstructionItemAction => {
	return {
		type: APPEND_TO_SELECTED_CONSTRUCTION_ITEMS,
		payload,
	};
};

export const removeFromSelectedConstructionItems = (payload: string): ConstructionItemAction => {
	return {
		type: REMOVE_FROM_SELECTED_CONSTRUCTION_ITEMS,
		payload,
	};
};
