import React from 'react';

import './homepage.css'

class HomePage extends React.Component {

    render() {
        return (
            <div>
                <p className="main-text">nunc sed id semper risus in Hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum</p>
                <div className="signup">
                    <a href='/createaccount'>Sign Up</a>
                </div>
                <div className="signin">
                Already have an account <a href='/login'>Sign In.</a>
                </div>
            </div>
        )
    }
}

export default HomePage;

