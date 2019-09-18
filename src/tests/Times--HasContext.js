import React from 'react';
import ReactDOM from 'react-dom';

import Times from '../components/Times/Times';

//the test case
it('renders without crashing', () => {
    //creating a DOM element
    const div = document.createElement('div');

    //render the component in the DOM element
    ReactDOM.render(<Times />, div);

    //clean up
    ReactDOM.unmountComponentAtNode(div);
})