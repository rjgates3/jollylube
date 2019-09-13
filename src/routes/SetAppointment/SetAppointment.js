import React from 'react';

//import react components
import CalendarComponent from '../../components/Calender/Calendar';
import Times from '../../components/Times/Times';

import ApptTimesContext from '../../contexts/ApptTimesContext'

//import css
import './setappointment.css';

class SetAppointmentPage extends React.Component {

    static ContextType = ApptTimesContext;

    state = {
        selectedDay: '',
        selectedAppts: []
    }

    setSelectedDay = (date) => {
        this.setState({
            selectedDay: date
        })
    }

    setSelectedAppts = (appts) => {
        this.setState({
            selectedAppts: appts
        })
    }

    render() {

        if(this.state.selectedAppts.length === 0) {

            return (
                <div className="set-appointment">
                    <ApptTimesContext.Provider
                        value= { {
                            selectedDay: this.state.selectedDay,
                            setSelectedDay: this.setSelectedDay,

                            selectedAppts: this.state.selectedAppts,
                            setSelectedAppts: this.setSelectedAppts,
                        } }
                    >
                    <h2>Faucibus Purus in Massa</h2>
                    <p className="main-text">Nibh praesent tristique magna sit amet purus gravida quis blandit turpis cursus in hac habitasse</p>
                    
                    <CalendarComponent />

                    </ApptTimesContext.Provider>
                </div>
            )
        }

        else {
            
            return (
                <div className="set-appointment">
                    <ApptTimesContext.Provider
                        value= { {
                            selectedDay: this.state.selectedDay,
                            setSelectedDay: this.setSelectedDay,

                            selectedAppts: this.state.selectedAppts,
                            setSelectedAppts: this.setSelectedAppts,
                        } }
                    >
                    <h2>Faucibus Purus in Massa</h2>
                    <p className="main-text">Nibh praesent tristique magna sit amet purus gravida quis blandit turpis cursus in hac habitasse</p>
                    
                    <CalendarComponent />

                    <Times />

                    </ApptTimesContext.Provider>
                </div>
            )
        }

    }
}

export default SetAppointmentPage;