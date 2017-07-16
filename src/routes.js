import React from 'react';
import { Switch, Route } from 'react-router';
import NextToGoPage from './races/pages/NextToGo';

export default () => (
    <Switch>
        <Route path="/" component={ NextToGoPage } />
    </Switch>
);