import React from 'react';
import { Provider } from "react-redux";
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory , IndexRoute} from "react-router";
import store from "./store";

import SearchHome from "./containers/SearchHome";

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" >
                <Route path="client-list" component={SearchHome} />
                <IndexRoute component={SearchHome} />
            </Route>
        </Router>
    </Provider>

  ,document.getElementById('root')
);
