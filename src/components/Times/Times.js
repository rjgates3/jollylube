import React from 'react';

import TimesService from '../../services/times-api-service';
import AptTimesContext from '../../contexts/ApptTimesContext';
import history from '../../history';

class Times extends React.Component {

    static contextType = AptTimesContext;

    state = {
        selectedButton: this.context.selectedAppts[0].id
    }

    setApptWithUser = () => {}

    handleRadioClicked = e => {
        this.setState({
            selectedButton: Number(e.target.value)
        })
        console.log(`radio clicked ${e.target.value}, ${this.state.selectedButton}`)
        console.log(`${typeof e.target.value}`)
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.context.selectedAppts)
        console.log(`Form Submitted selected Radio Button = ${this.state.selectedButton}, with type = ${typeof this.state.selectedButton}`)

        TimesService.updateAppt(this.state.selectedButton)
            .then(() => history.push('/myappointments'))
        // direct to myappointments
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

    render() {
            return(
                <section className="picktime">
                    <p className="selecteddate">{  this.context.selectedDay.toString().slice(0, 15)  }</p>
                    <form 
                        className='form appt-form'
                        onSubmit = { this.handleSubmit }
                    >
                        {this.context.selectedAppts.map(appt =>
                            <div className='form-check appt' key={appt.id}>
                                <label>
                                    <input
                                        type = "radio"
                                        value = { appt.id }
                                        checked = { this.state.selectedButton === appt.id }
                                        onChange = { this.handleRadioClicked }
                                    />
                                        { this.formatTime(new Date(appt.appt_date)) }
                                </label>
                            </div>
                        )}
                        <div className='form-group'>
                            <button className='radio-submitt'>
                                Save
                            </button>
                        </div>
                    </form>
                </section>
            )
    }
}

export default Times