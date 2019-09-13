import React from 'react';

import AptTimesContext from '../../contexts/ApptTimesContext';

class Times extends React.Component {

    static contextType = AptTimesContext;

    state = {
        selectedButton: this.context.selectedAppts[0].id
    }

    handleRadioClicked = e => {
        this.setState({
            selectedButton: e.target.value
        })
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
                    >
                        {this.context.selectedAppts.map((appt, idx) =>
                            <div className='form-check appt' key={appt.id}>
                                <label>
                                    <input
                                        type = "radio"
                                        name = "react-tips"
                                        value = { appt.id }
                                        checked = { appt.id === this.state.selectedButton }
                                        onChange = { this.handleRadioClicked }
                                        className = "form-check-input"
                                    />
                                        { this.formatTime(new Date(appt.apt_date)) }
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