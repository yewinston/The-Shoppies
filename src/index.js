// React
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

// React Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './components/reducers';

// Components
import App from './App';
import './index.css';

const persistedState = localStorage.getItem('reduxState') 
    ? JSON.parse(localStorage.getItem('reduxState'))
    : {}

const store = createStore(
    allReducers,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
