import React from 'react';

import TimesService from '../../services/times-api-service';
import AptTimesContext from '../../contexts/ApptTimesContext';
import history from '../../history';

class Times extends React.Component {

    static contextType = AptTimesContext;

    state = {
        selectedButton: this.context.selectedAppts[0].id
    }

    handleSelect = e => {
        e.preventDefault();
        TimesService.updateAppt(e.target.value)
            .then(() => history.push('/myappointments'))
    }

    formatTime = (date) => {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        const time = hours + ':' + minutes + ' ' + ampm;
        return time;
    }

    formateAppt = (appt) => {
        const time = this.formatTime(new Date(appt.appt_date));
        const dayOfWeek = appt.appt_date.toString().slice(0, 3);
        const monthDayAndYear = appt.appt_date.toString().slice(4, 15)
        return  <div>
                    <p className='appt-text'>{ dayOfWeek }</p>
                    <p className='appt-text'>{ monthDayAndYear }</p>
                    <p className='appt-text'>at</p>
                    <p className='appt-text'>{ time }</p>
                </div>
    }

    render() {
            return(
                <div>
                    
                    <h2 className='setApptH2'>Select an Available Appointment Time. </h2>

                    <section className='allappts'>

                        { this.context.selectedAppts

                            .sort((a, b) => 
                                new Date(a.appt_date) - new Date(b.appt_date)
                            )
                        
                            .map(appt =>
                                <div className='appt' key={ appt.id }>
                                    { this.formateAppt(appt)  }
                                    <button 
                                        type='Submit'
                                        className='setApptButton'
                                        onClick={ this.handleSelect }
                                        value={ appt.id }>
                                        Create Appointment
                                    </button>
                                </div>)
                        }
                    </section>

                </div>
            )
    }
}

export default Times