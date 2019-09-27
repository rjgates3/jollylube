import TokenService from './token-services'
import config from '../config'

const TimesApiService = {

    getApptTimes() {
    
        return fetch(`${config.API_BASE_URL}/times`, {
            method: 'GET',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res => 
                (res.ok)
                    ? res.json()
                    : res.json().then(e => Promise.reject(e))
            )
    },

    updateAppt(id) {

        return fetch(`${config.API_BASE_URL}/times/${id}`, {
            method: 'PATCH',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res => 
                (res.ok)
                    ? res.json()
                    : res.json().then(e => Promise.reject(e))
            )
    },

    cancelAppt(id) {
        return fetch(`${config.API_BASE_URL}/times/cancelAppt/${id}`, {
            method: 'PATCH',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res => 
                (res.ok)
                    ? res.json()
                    : res.json().then(e => Promise.reject(e))
            )
    },

    getUserAppts() {
        return fetch(`${config.API_BASE_URL}/times/userappts`, {
            method: 'GET',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res => 
                (res.ok)
                ? res.json()
                : res.json().then(e => Promise.reject(e))
            )
    }
}

export default TimesApiService