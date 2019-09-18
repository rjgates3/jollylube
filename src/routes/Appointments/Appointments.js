import React from 'react';
import { Link } from 'react-router-dom';
import TimesApiService from '../../services/times-api-service';

import './appointments.css'
class AppointmentPage extends React.Component {

    state = {
        userAppts: []
    }

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

    formatTime = (date) => {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        const time = hours + ':' + minutes + ' ' + ampm;
        return time; 
    }

    formateAppt = (appt) => {
        const time = this.formatTime(new Date(appt.appt_date));
        const dayOfWeek = appt.appt_date.toString().slice(0, 3);
        const monthDayAndYear = appt.appt_date.toString().slice(4, 15)
        return  <div>
                    <p>{ dayOfWeek }</p>
                    <p>{ monthDayAndYear }</p>
                    <p>at</p>
                    <p>{ time }</p>
                </div>
    }


    render() {

        if(this.state.userAppts.length === 0) {
            return (
                <section>
                <h2>My Appointments</h2>
                <div className='allappts'> 

                    <div className='appt'>
                        <p>You have</p>
                        <p>no appointments.</p>
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
                <section>
                    <h2>My Appointments</h2>
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