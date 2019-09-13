import React from 'react';
import { Route, Switch } from "react-router-dom";

//import routes
import HomePage from '../../routes/HomePage/HomePage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import Registration from '../../routes/Registration/Registration';
import MyAppointments from '../../routes/Appointments/Appointments';
import SetAppointment from '../../routes/SetAppointment/SetAppointment';
import NotFound from '../../routes/NotFound/NotFound';

//import other components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PrivateOnlyRoute from '../../components/Utils/PrivateOnlyRoute';
import PublicRoute from '../../components/Utils/PublicRoute';

import Context from '../../contexts/Context';

class App extends React.Component {

    static contextType = Context;

    state = {
        loggedIn: false,
        hasError: false,
        loginError: null,
    }

    // Need a isLoggedIn function:
    //look and see if user has an authToken
    //validate that authToken
    //set loggedIn to true/false

    setLoginError = (error) => {
        this.setState({
            loginError: error
        })
    }

    handleLogin = () => {
        this.setState({
            loggedIn: true
        })
    }

    handleLogout = () => {
        this.setState({
            loggedIn: false
        })
    }

    render() {
        return (
            <div className='App'>
                <Context.Provider
                    value = { {
                        loggedIn: this.state.loggedIn,
                        logginError: this.state.loginError,
                        handleLogin: this.handleLogin,
                        handleLogout: this.handleLogout,
                        setLoginError: this.setLoginError
                } } >
                <Header />
                <main className='App_main'>
                    {this.state.hasError && <p> className='red'>There was an error!</p>}
                    <Switch>
                        <Route
                            exact
                            path='/'
                            component={ HomePage }
                        />
                        <PublicRoute
                            path='/login'
                            component={ LoginPage }
                        />
                        <PublicRoute
                            path='/createaccount'
                            component={ Registration }
                        />
                        <PrivateOnlyRoute
                            path='/myappointments'
                            component={ MyAppointments }
                        />
                        <PrivateOnlyRoute
                            path='/setappointment'
                            component={ SetAppointment }
                        />
                        <Route
                            component={ NotFound }
                        />
                    </Switch>
                </main>

                <Footer />
            </Context.Provider>
            </div>
        )
    }
}


export default App