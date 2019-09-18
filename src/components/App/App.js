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
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../Backdrop/Backdrop';
import PrivateOnlyRoute from '../../components/Utils/PrivateOnlyRoute';
import PublicRoute from '../../components/Utils/PublicRoute';
import Footer from '../../components/Footer/Footer';
import Context from '../../contexts/Context';

class App extends React.Component {

    static contextType = Context;

    state = {
        loggedIn: false,
        hasError: false,
        loginError: null,
        sideDrawerOpen: false,
        drawerClasses: 'side-drawer',
    }

    static getDrivedStateFromError(error) {
        console.error(error)
        return { hasError: true }
    }

    setLoggedIn = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen}
        })
    }

    setLoginError = (error) => {
        this.setState({
            loginError: error
        })
    }

    handleDrawerToggleClick = e => {
        e.preventDefault()
        this.setState({
                sideDrawerOpen: true,
                drawerClasses: 'side-drawer open'
        })
    };

    handleBackDropClick = () => {
        this.setState({
            sideDrawerOpen: false,
            drawerClasses: 'side-drawer'
        })
    };

    render() {

        let backdrop;
        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click = { this.handleBackDropClick } />;
        }
        return (
            <div style={ { height: '100%' } }>
                <Context.Provider
                    value = { {
                        loggedIn: this.state.loggedIn,
                        logginError: this.state.loginError,
                        setLoggedIn: this.setLoggedIn,
                        setLoginError: this.setLoginError,

                        drawerClasses: this.state.drawerClasses,
                        handleDrawerToggleClick: this.handleDrawerToggleClick,
                        click: this.handleDrawerToggleClick
                } } >
                <Header />
                <SideDrawer />
                { backdrop }
                <main style={ { marginTop: '56px' } }>
                    {this.state.hasError && <p className='red'>There was an error!</p>}
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