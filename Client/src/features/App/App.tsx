import React from "react";
import { Provider } from "react-redux";
import configureStore from "../../store/configureStore";
import { LayoutContainer } from "../Layout/Components/LayoutContainer";
import "./app.css";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <LayoutContainer />
      </div>
    </Provider>
  );
}

export default App;
