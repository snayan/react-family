import { ActionCreator } from "redux";
import { UserLoginInfo } from "../../types";
const LOGIN = "login";

export type LoginData = Pick<UserLoginInfo, "loginName"> &
  Pick<UserLoginInfo, "loginPsd">;

export interface LoginAction {
  type: string;
  data: LoginData;
}

export const onLogin: ActionCreator<LoginAction> = (data: LoginData) => {
  return {
    type: LOGIN,
    data: data
  };
};
