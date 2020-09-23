import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';
import { startPageReducer } from 'src/pages/questionnaire/reducer';
import { pageReducer } from 'src/pages/reducer';
import { apiReducer } from 'src/services/api/reducer';

import { constructionItemsReducer } from '../../features/construction-items/reducers';

const rootReducer = combineReducers({
	constructionItems: constructionItemsReducer,
	questionnaire: startPageReducer,
	page: pageReducer,
	api: apiReducer,
});

const persistConfig = {
	key: 'root',
	storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const storeAndPersistor = () => {
	const store = createStore(persistedReducer, composeWithDevTools());
	const persistor = persistStore(store);
	return { store, persistor };
};
