import {Action, ActionCreator} from "redux";

export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';

export const increment: ActionCreator<Action> = () => ({
  type: INCREMENT
});

export const decrement: ActionCreator<Action> = () => ({
  type: DECREMENT
});
