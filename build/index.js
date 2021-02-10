import * as React from "./_snowpack/pkg/react.js";
import * as ReactDOM from "./_snowpack/pkg/react-dom.js";
import {Provider} from "./_snowpack/pkg/react-redux.js";
import {store} from "./store/store.js";
import {SpellBook} from "./components/pages/SpellBook/SpellBook.js";
const appElement = document.createElement("app");
appElement.id = "app";
document.body.appendChild(appElement);
const App = () => /* @__PURE__ */ React.createElement(SpellBook, null);
ReactDOM.render(/* @__PURE__ */ React.createElement(Provider, {
  store
}, /* @__PURE__ */ React.createElement(App, null)), appElement);
