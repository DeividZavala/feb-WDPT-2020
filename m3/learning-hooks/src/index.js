import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AppContextProvider from "./AppContext";
import * as serviceWorker from "./serviceWorker";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import "uikit/dist/css/uikit.min.css";
import { BrowserRouter } from "react-router-dom";

UIkit.use(Icons);

const WithRouter = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <WithRouter />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
