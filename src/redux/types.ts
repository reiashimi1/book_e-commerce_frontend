import { compose } from "redux";

export type ActionType = {
  type?: string;
  payload?: any;
  text?: string;
}

export type AuthType = {
  token: string;
}

export interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
}