import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { startPageReducer } from 'src/pages/questionnaire/reducer';
import { pageReducer } from 'src/pages/reducer';
import { constructionItemsReducer } from '../../features/construction-items/reducers';

const rootReducer = combineReducers({
	constructionItems: constructionItemsReducer,
	questionnaire: startPageReducer,
	page: pageReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
