import {
	appendToConstructionItems,
	appendToSelectedConstructionItems,
	removeFromSelectedConstructionItems,
	APPEND_TO_SELECTED_CONSTRUCTION_ITEMS,
	APPEND_TO_CONSTRUCTION_ITEMS,
} from '.';

describe('appendToConstructionItems', () => {
	it('Should return the correct action object', () => {
		const mockPayload = ['test'];

		const resultingPayload = appendToConstructionItems(mockPayload);

		expect(resultingPayload.payload).toBe(mockPayload);
		expect(resultingPayload.type).toBe(APPEND_TO_CONSTRUCTION_ITEMS);
	});

	it('Should return null payload when null is provided in parameter', () => {
		const resultingPayload = appendToConstructionItems(null);

		expect(resultingPayload.payload).toBe(null);
		expect(resultingPayload.type).toBe(APPEND_TO_CONSTRUCTION_ITEMS);
	});
});

describe('appendToSelectedConstructionItems', () => {
	it('Should return the correct action object', () => {
		const mockPayload = 'test';

		const resultingPayload = appendToSelectedConstructionItems(mockPayload);

		expect(resultingPayload.payload).toBe(mockPayload);
		expect(resultingPayload.type).toBe(APPEND_TO_SELECTED_CONSTRUCTION_ITEMS);
	});

	it('Should return null payload when null is provided in parameter', () => {
		const resultingPayload = appendToSelectedConstructionItems(null);

		expect(resultingPayload.payload).toBe(null);
		expect(resultingPayload.type).toBe(APPEND_TO_SELECTED_CONSTRUCTION_ITEMS);
	});
});
