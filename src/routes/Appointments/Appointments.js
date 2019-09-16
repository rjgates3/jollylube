import React from 'react';

import TimesApiService from '../../services/times-api-service';

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
                .then(appts => console.log(appts))
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

    formateTime = (date) => {
        console.log(date);
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        const time = hours + ':' + minutes + ' ' + ampm;
        return time; 
    }

    formateAppt = (appt) => {
        const time = this.formateTime(new Date(appt.appt_date));
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
        return (
            <div>
                <h2>Faucibus Purus in Massa</h2>
                <p className="main-text">Nibh praesent tristique magna sit amet purus gravida quis blandit turpis cursus in hac habitasse</p>
                <h2>List Appointments</h2>
                { this.state.userAppts.map(appt => 

                    <section className='appt' key={appt.id}>
                        { this.formateAppt(appt)  }
                    </section> )
                }
            </div>
        )
    }
}

export default AppointmentPage;