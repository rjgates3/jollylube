import React from 'react';
import ReactDOM from 'react-dom';

import Registration from '../routes/Registration/Registration';

//the test case
it('renders without crashing', () => {
    //creating a DOM element
    const div = document.createElement('div');

    //render the component in the DOM element
    ReactDOM.render(<Registration />, div);

    //clean up
    ReactDOM.unmountComponentAtNode(div);
})