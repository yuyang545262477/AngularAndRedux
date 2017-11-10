import {AppState} from "../interface";
import {Action} from "redux";
import {ADD_Message, DELETE_MESSAGE} from "../action/constant";
import {AddMessageAction, DeleteMessageAction} from "../action/interface";

let initialState = {
    messages: []
};

export function reducer(state: AppState = initialState, action: Action): AppState {
    switch (action.type) {
        case ADD_Message:
            return {
                messages: state.messages.concat((<AddMessageAction>action).message)
            };
        case DELETE_MESSAGE:
            let idx = (<DeleteMessageAction>action).index;
            return {
                messages: [...state.messages.slice(0, idx), ...state.messages.slice(idx + 1, state.messages.length)]
            };
        default:
            return state;
    }
}