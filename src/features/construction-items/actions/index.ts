import { ConstructionItemAction } from '../types';

export const APPEND_TO_CONSTRUCTION_ITEMS = 'APPEND_TO_CONSTRUCTION_ITEMS';
export const REMOVE_FROM_CONSTRUCTION_ITEMS = 'REMOVE_FROM_CONSTRUCTION_ITEMS';

export const appendToConstructionItems = (payload: string): ConstructionItemAction => {
	return {
		type: APPEND_TO_CONSTRUCTION_ITEMS,
		payload,
	};
};

export const removeFromConstructionItems = (payload: string): ConstructionItemAction => {
	return {
		type: APPEND_TO_CONSTRUCTION_ITEMS,
		payload,
	};
};
