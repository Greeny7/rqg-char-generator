import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { store } from './store/store';
import {SpellBook} from "./components/pages/SpellBook/SpellBook";

const appElement = document.createElement('app');
appElement.id = 'app';
document.body.appendChild(appElement);

const App = () => (
    <SpellBook />
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    appElement
);