import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import axios from "axios";


axios.defaults.baseURL = "https://api-zgamez-production.up.railway.app"

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, document.getElementById("root"));

