import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MainPage } from './components/pages/MainPage/MainPage';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from './store/store';
import {SpellBook} from "./components/pages/SpellBook/SpellBook";

const appElement = document.createElement('app');
appElement.id = 'app';
document.body.appendChild(appElement);

const App = () => (
    <Router>
        <div>
            <Route exact path="/charGen" component={MainPage} />
            <Route exact path="/" component={SpellBook} />
        </div>
    </Router>
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    appElement
);