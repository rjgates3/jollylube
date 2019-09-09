import React from 'react';

class Registration extends React.Component {

    render() {
        return(
            <form 
                id="contactForm" 
                action="#"
            >
                <legend 
                    id="create-account"
                >Create an Account</legend>
                <div>
                    <label
                        htmlFor="name"
                    >Name</label>
                    <input
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Enter your full name:"
                    ></input>
                </div>
                <div>
                    <label
                        htmlFor="email"
                    >Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Enter your email:"
                    ></input>
                </div>
                <div>
                    <label
                        htmlFor="password"
                    >Password</label>
                    <input
                        type="text"
                        id="password"
                        name="password"
                        placeholder="Password"
                    ></input>
                </div>
                <div>
                    <label
                        htmlFor="retype-password"
                        ></label>
                    <input
                        type="text"
                        id="retype-password"
                        name="retype-password"
                        placeholder="Retype Your Password"
                    ></input>
                </div>
                <div>
                    <input
                        type="submit"
                        name="submit"
                        id="submit"
                        value="Sign Up"
                    ></input>
                </div>
            </form>
        )
    }
}

export default Registration