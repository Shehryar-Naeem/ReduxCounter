// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import Store from "./Store";
// import {Provider} from "react-redux"
// Store.subscribe(()=> console.log(Store.getState()))
// ReactDOM.render(
//   <>
//   <Provider store={Store}>
//     <App/>
//   </Provider>
//   </>,
//   document.getElementById("root")
// )


import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./Store";
import {Provider} from "react-redux"
import "./index.css"
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
)