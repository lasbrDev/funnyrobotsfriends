import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { requestRobots, searchRobots } from "./reducerts";
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

    const looger = createLogger();
    const rootReducers = combineReducers({requestRobots, searchRobots})
    const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, looger))
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <Provider store={store}>
        <App />
      </Provider>
    );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
