import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { constructionItemsReducer } from '../../features/construction-items/reducers';

const rootReducer = combineReducers({
	constructionItems: constructionItemsReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
