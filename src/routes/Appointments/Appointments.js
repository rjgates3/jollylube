import React from 'react';
import { Link } from 'react-router-dom';
import TimesApiService from '../../services/times-api-service';

import './appointments.css'
class AppointmentPage extends React.Component {

    state = {
        userAppts: []
    }
    // get apptments when component mounts
    componentDidMount() {

        this.getUserAppts()
            .then(appts => {
                this.setState({
                    userAppts: appts
                })
            })
    }

    //get user's appts
    getUserAppts = () => {
        return TimesApiService.getUserAppts()
            .then(resJson => {
                let appts = [];
                for(let i=0; i<resJson.length; i++){
                    appts.push(resJson[i])
                }
                return appts;
            })
    }

    //format time to be HH:MM AM/PM
    formatTime = (date) => {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        const time = hours + ':' + minutes + ' ' + ampm;
        return time; 
    }

    //returns a div elemnent for a single appt object
    formateAppt = (appt) => {
        const dayOfWeek = appt.appt_date.toString().slice(0, 3);
        const monthDayAndYear = appt.appt_date.toString().slice(4, 15)
        const time = this.formatTime(new Date(appt.appt_date));
        return  <div>
                    <p className='appt-text'>{ dayOfWeek }</p>
                    <p className='appt-text'>{ monthDayAndYear }</p>
                    <p className='appt-text'>at</p>
                    <p className='appt-text'>{ time }</p>
                </div>
    }


    render() {

        if(this.state.userAppts.length === 0) {
            return (
                <section className='my-appointments'>
                <h2 className='setApptH2'>My Appointments</h2>
                <div className='allappts'> 

                    <div className='appt'>
                        <p className='appt-text'>You have</p>
                        <p className='appt-text'>no appointments.</p>
                        <Link 
                            to='/setappointment'>
                            Set Appointment
                        </Link>
                    </div>

                </div>
            </section>
            )
        }
        else {
            return (
                <section className='my-appointments'>
                    <h2 className='setApptH2'>My Appointments</h2>
                    <div className='allappts'>
                        { this.state.userAppts
                            .sort((a, b) => 
                                new Date(a.appt_date) - new Date(b.appt_date)
                            )
                        
                            .map(appt => 

                                <div className='appt' key={appt.id}>
                                    { this.formateAppt(appt)  }
                                </div>
                            )
                        }
                    </div>
                </section>
            )
        }
    }
}

export default AppointmentPage;