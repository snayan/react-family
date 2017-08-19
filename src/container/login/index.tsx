import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { onLogin, LoginData } from "../../actions";

type LoginProps = {
  onLogin: (data: LoginData) => void;
};

class Login extends React.Component<LoginProps> {
  constructor(props: LoginProps) {
    super(props);
  }
  render() {
    return <h1>hello world,</h1>;
  }
}

const mapDispatchToProps = (dispatch: Dispatch<LoginData>) => {
  return {
    onLogin: (data: LoginData) => {
      dispatch(onLogin(data));
    }
  };
};

const LoginPage = connect(null, mapDispatchToProps)(Login);

export { LoginPage };
