import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import App from './components/App/App';
import history from './history';
import ErrorBoundry from './components/ErrorBoundry/ErrorBoundry';


ReactDOM.render(
    <Router history={history}>
        <ErrorBoundry>
            <App/>
        </ErrorBoundry>
    </Router>,
    document.getElementById('root')
);