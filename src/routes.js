import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Checkout from './pages/Checkout';
import Main from './pages/Main';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/checkout" component={Checkout} />
            </Switch>
        </BrowserRouter>
    );
}