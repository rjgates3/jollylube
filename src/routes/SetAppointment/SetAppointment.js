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
                <section className="set-appointment">

                    <ApptTimesContext.Provider
                        value= { {
                            selectedDay: this.state.selectedDay,
                            setSelectedDay: this.setSelectedDay,

                            selectedAppts: this.state.selectedAppts,
                            setSelectedAppts: this.setSelectedAppts,
                        } }
                    >
                    
                    <CalendarComponent />

                    </ApptTimesContext.Provider>
                </section>
            )
        }

        else {
            
            return (
                <section className="set-appointment">

                    <ApptTimesContext.Provider
                        value= { {
                            selectedDay: this.state.selectedDay,
                            setSelectedDay: this.setSelectedDay,

                            selectedAppts: this.state.selectedAppts,
                            setSelectedAppts: this.setSelectedAppts,
                        } }
                    >
                    
                    <CalendarComponent />

                    <Times />

                    </ApptTimesContext.Provider>
                </section>
            )
        }

    }
}

export default SetAppointmentPage;