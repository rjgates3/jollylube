import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import ErrorBoundry from './components/ErrorBoundry/ErrorBoundry';


ReactDOM.render(
    <BrowserRouter>
        <ErrorBoundry>
            <App/>
        </ErrorBoundry>
    </BrowserRouter>,
    document.getElementById('root')
);