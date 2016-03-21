import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

// Layouts
import Layout from 'layouts/Layout';

// Components
import Home from 'components/Home';
import Clients from 'components/Clients';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route component={Layout}>
            <Route path="/" component={Home} />
            <Route path="/clients" component={Clients} />
        </Route>
    </Router>
), document.getElementById('app'));