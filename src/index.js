import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import reduxThunk from "redux-thunk";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

function Main() {
  return <App />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  rootElement
);
