import React from "react";
import { Provider } from "react-redux";
import configureStore from "../../store/configureStore";
import { LayoutContainer } from "../Layout/Components/LayoutContainer";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <LayoutContainer />
      </div>
    </Provider>
  );
}

export default App;
