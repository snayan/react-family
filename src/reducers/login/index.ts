/* login reducer */

import { Reducer } from "redux";
import { LoginData, LoginAction } from "../../actions/login";

const loginReducer: Reducer<LoginData> = (
  state: LoginData = null,
  action: LoginAction
) => {
  return { loginName: "zy", loginPsd: "as" };
};

export default loginReducer;
