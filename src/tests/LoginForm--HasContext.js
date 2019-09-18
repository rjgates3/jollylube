import React from 'react';
import ReactDOM from 'react-dom';

import LoginForm from '../components/LoginForm/LoginForm';

//the test case
it('renders without crashing', () => {
    //creating a DOM element
    const div = document.createElement('div');

    //render the component in the DOM element
    ReactDOM.render(<LoginForm />, div);

    //clean up
    ReactDOM.unmountComponentAtNode(div);
})