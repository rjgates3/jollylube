import React from 'react';
import Calendar from 'react-calendar';

import ApptTimesContext from '../../contexts/ApptTimesContext';
import TimesApiService from '../../services/times-api-service'

class CalendarComponent extends React.Component {

    static contextType = ApptTimesContext;

    state = {
        activeStartDate: new Date(),
        loading: true,
        appts: [],
    }

    switchLoading = () => {
        this.setState({
          loading: !this.state.loading
        })
    }

    handleDateClicked = (date) => {
        this.context.setSelectedDay(date)
        //Appts are alreay filtered by year and month, so only need to filter by day and update context
        let filterDay = new Date(date).getDay();
        this.context.setSelectedAppts(this.filterApptsByDay(this.state.appts, filterDay))
    }

    getAppts = () => {

        // could use an async function
        // let resJson = await TimesApiService.getApptTimes();
        
        //fetch all appt times
        return TimesApiService.getApptTimes()
            .then(resJson => {
                let appts = [];
                for(let i=0; i<resJson.length; i++){
                    appts.push(resJson[i])
                }
                return appts;
        })
    }

    //filter appts by year and month
    filterAppts = (appts, year, month) => {

        return appts
            //filter by year
            .filter(appt => {
                let apptYear = new Date(appt.apt_date).getFullYear();
                return apptYear === year;
            })
            //filter by month
            .filter(appt => {
                let apptMonth = new Date(appt.apt_date).getMonth();
                return apptMonth === month; // or to add next month also
            })
    }

    filterApptsByDay = (appts, day) => {
        return appts
            //filter by day
            .filter(appt => {
                let apptDay = new Date(appt.apt_date).getDay();
                return apptDay === day;
            })
    }

    //returns a timestamp with year, month and date with time = 00:00:00.000
    getTimeStamp = (date) => {

        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        return new Date(year, month, day, 0, 0, 0);
    }

    isDayInAppts = (date) => {
        return this.state.appts.reduce((acc, appt) => {
            // const date = new Date(date)
            const apptTimeStamp = this.getTimeStamp(new Date(appt.apt_date))
            const dateTimeStamp = this.getTimeStamp(new Date(date))
            //compare month and date
            return (apptTimeStamp.getTime() === dateTimeStamp.getTime())
                ? true
                : acc
        }, false)
    }

    componentDidMount() {

        //Get all appts
        this.getAppts()
            .then(appts => {

                //filter appts by todays year, month
                const today = new Date();
                const year = today.getFullYear();
                const month = today.getMonth();

                this.setState ({
                    appts: this.filterAppts(appts, year, month)
                })
            })
                .then(() => 
                    this.switchLoading()
                )
    }

    onChangeView = (value) => {
        
        // console.log(`active view changed ${value.activeStartDate}, ${value.view}`)
        /*
        value.activeStartDate ==> the first day of month now viewing after change
        value.view ==> month, year, decade
         */
        // when the view is changed, updates appts with new month

        this.switchLoading();

        this.getAppts()
            .then(appts => {

                //filter appts by activeStartDate year, month
                const date = new Date(value.activeStartDate);
                const year = date.getFullYear();
                const month = date.getMonth();

                this.setState ({
                    appts: this.filterAppts(appts, year, month),
                    activeStartDate: value.activeStartDate
                })
            })
                .then(() => 
                    this.switchLoading()
                )
    }

    disabledDates = (date) => {

        //create a new timestamp with todays day, month, and year, with time=00:00:00.000
        const todayTimeStamp = this.getTimeStamp(new Date())

        // return disabled for any date < today
        if(date < todayTimeStamp) {
            return true
        }
        else return !this.isDayInAppts(date);
    }
    

    render() {

        // loading screen while getting and preping data
        if(this.state.loading) {
            return(
                <section className="calendar">
                    <div className="select">Loading</div>
                </section>
            )
        }
        else {
            return(
                <section className="calendar">
                        <Calendar
                            activeStartDate = { this.state.activeStartDate }
                            calendarType = "US"
                            tileDisabled = { ({ date }) => this.disabledDates(date) }
                            onClickMonth = { (date) => this.context.setDaysWithAppt(date) }
                            onClickDay = { (date) => this.handleDateClicked(date) }
                            onActiveDateChange = { (value) => this.onChangeView(value) }
                            maxDetail = "month"
                            minDetail = "month"
                        />
                    <div className="select">Select a Day</div>
                </section>
            )
        }
    }
}

export default CalendarComponent