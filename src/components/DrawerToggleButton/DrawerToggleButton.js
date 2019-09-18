import React from 'react';
import Context from '../../contexts/Context';

import './drawerToggleButton.css';

class DrawerToggleButton extends React.Component {

    static contextType = Context;

    render() {
        return (
            <button className='toggle-button' onClick = { this.context.handleDrawerToggleClick }>
                <i className="fas fa-bars"></i>
            </button>
        )
    }
}


export default DrawerToggleButton;

