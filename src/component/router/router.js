import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Content from '../page/content'
import Home from '../page/home'

class BasicRoute extends React.Component {
    render() {
        return (
            <HashRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/detail" component={Content} />
            </Switch>
            </HashRouter>
        )
    }
}

export default BasicRoute;