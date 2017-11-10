import {AppState} from "./interface";
import {createStore, Store} from "redux";
import {reducer} from "./reducer/reducer";
import {MessageActions} from "./action/creator";


let store: Store<AppState> = createStore<AppState>(reducer);
console.log(store.getState());

store.dispatch(MessageActions.addMessage('hello Word'));
store.dispatch(MessageActions.addMessage('hello Word2'));
store.dispatch(MessageActions.addMessage('hello 3'));
store.dispatch(MessageActions.deleteMessage(0));

console.log(store.getState());