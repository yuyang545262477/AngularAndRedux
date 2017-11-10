import {AddMessageAction, DeleteMessageAction} from "./interface";
import {ADD_Message, DELETE_MESSAGE} from "./constant";

export class MessageActions {
    static addMessage(message: string): AddMessageAction {
        return {
            type: ADD_Message,
            message: message
        }
    }

    static deleteMessage(index: number): DeleteMessageAction {
        return {
            type: DELETE_MESSAGE,
            index: index
        }
    }
}