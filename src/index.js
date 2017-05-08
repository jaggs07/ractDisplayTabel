import React from 'react';
import { Provider } from "react-redux";
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory , IndexRoute} from "react-router";
import store from "./store";

import SearchHomeContainer from './scences/SearchHome/index';

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" >
                <Route path="client-list" component={SearchHomeContainer} />
                <IndexRoute component={SearchHomeContainer} />
            </Route>
        </Router>
    </Provider>

  ,document.getElementById('root')
);
