import React from 'react';
import ReactDOM from 'react-dom';

import App from '../components/App/App';
import { isTSAnyKeyword } from '@babel/types';

//the test case
it('renders without crashing', () => {
    //creating a DOM element
    const div = document.createElement('div');

    //render the component in the DOM element
    ReactDOM.render(<App />, div);

    //clean up
    ReactDOM.unmountComponentAtNode(div);
})