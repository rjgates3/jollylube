import React from 'react';
import Calendar from 'react-calendar';

class CalendarComponent extends React.Component {

    state = {
        loading: true,
        selectedDate: null
    }

    componentDidMount() {
        console.log('component updated')
    }

    onChange = date => {
        console.log(date);
        this.setState({
            selectedDate: date
        })

    }

    getDisabledDates = (date) => {

        const today = new Date();
        const yesterday = new Date(today.getTime() - 24*60*60*1000) 
        // console.log(date, today);
        if(date < yesterday) {
            return true
        }
    // else if(date.getDay() === 0 || date.getDay() === 6) {
    //     return true
    // }
        else return false;
    }
    

    render() {
        return(
            <div>
                <section className="calendar">
                        <Calendar
                            activeStartDate = { new Date() }
                            calendarType = "US"
                            tileDisabled = { ({ date }) => this.getDisabledDates(date) }
                            onChange = { this.onChange }
                            value = { this.state.selectedDate }
                        />
                    <div className="select">Select a Day</div>
                </section>
                <section>
                    <p>{ JSON.stringify(this.state.selectedDate) }</p>
                </section>
            </div>
        )
    }
}

export default CalendarComponent