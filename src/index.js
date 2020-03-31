import React from "react";
import ReactDOM from "react-dom";
//1. import createStore from redux
//2. import Provider from react-redux
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./TodoApp";
import rootReducer from "./redux/reducers";

// create store (can do it in a separate file as sell)
// need to pass all reducers when creating the store to make them
// available for the <App>
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
