import React from 'react';
import { TodoApp } from './TodoApp';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../configureStore';

export const Root = () => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/todo/:filter?" component={TodoApp} />
                <Route exact path="/" component={() => <>Hell</>} />
                <Route component={() => <>No Match</>} />
            </Switch>
        </Router>
    </Provider>
);
