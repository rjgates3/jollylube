import React from 'react';
import ReactDOM from 'react-dom';

import NotFound from '../routes/NotFound/NotFound';

//the test case
it('renders without crashing', () => {
    //creating a DOM element
    const div = document.createElement('div');

    //render the component in the DOM element
    ReactDOM.render(<NotFound />, div);

    //clean up
    ReactDOM.unmountComponentAtNode(div);
})