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
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    }
}

export default TimesApiService