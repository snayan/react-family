import * as React from "react";
import { Provider } from "react-redux";
import Routers from "./routers";
import store from "./store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {Routers}
      </Provider>
    );
  }
}

export default App;
