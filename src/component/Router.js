import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import App from '../App';
import Boot from './boot';



const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/detail" component={Boot}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;