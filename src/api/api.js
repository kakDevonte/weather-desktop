import axios from 'axios'

const apiKey = '907354dfc1ab376e35c27459760d60f2'

export const weatherAPI = {
    getCoordinates(city) {
        return axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city},RU&appid=${apiKey}`)
    },
    getWeatherData(lat, lon) {
        return axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=ru&appid=${apiKey}`)
    }
}