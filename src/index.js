import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import "../src/css/App.css";
import "../src/css/Loader.css";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("index")
);
