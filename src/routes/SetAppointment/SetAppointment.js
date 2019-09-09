import React from 'react';

//import react components
import CalendarComponent from '../../components/Calender/Calendar';
import Times from '../../components/Times/Times';

//import css
import './setappointment.css';

class SetAppointmentPage extends React.Component {

    render() {
        return (
            <div className="set-appointment">
                <h2>Faucibus Purus in Massa</h2>
                <p className="main-text">Nibh praesent tristique magna sit amet purus gravida quis blandit turpis cursus in hac habitasse</p>
                
                <CalendarComponent />

                <Times />
                
            </div>
        )
    }
}

export default SetAppointmentPage;