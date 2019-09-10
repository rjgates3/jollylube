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

class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <Header />
                <main className='App_main'>
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
                            path='/myappointments/:userid'
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
            </div>
        )
    }
}


export default App