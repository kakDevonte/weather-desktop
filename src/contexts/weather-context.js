import React from 'react'
import {weatherAPI} from '../api/api'
import {CELSIUS} from '../utils/types'

const SET_WEATHER_DATA = 'SET_WEATHER_DATA'
const SET_DEGREES = 'SET_DEGREES'

const WeatherContext = React.createContext()

export const WeatherContextProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, {
        weatherData: null,
        degrees: CELSIUS,
        city: 'Omsk'
    })

    const actions = {
        fetchWeatherDataByCity: async (city) => {
            const response = await weatherAPI.getCoordinates(city)
            const result = await weatherAPI.getWeatherData(response.data[0].lat, response.data[0].lon)

            dispatch({
                type: SET_WEATHER_DATA,
                payload: result.data
            })
        },
        fetchWeatherDataByCoordinate: async (lat, lon) => {
            const result = await weatherAPI.getWeatherData(lat, lon)
            dispatch({
                type: SET_WEATHER_DATA,
                payload: result.data
            })
        },
        changeDegrees: (degree) => {
            dispatch({
                type: SET_DEGREES,
                payload: degree
            })
    }
    }

    return(
        <WeatherContext.Provider value={{ state, actions }}>
            {children}
        </WeatherContext.Provider>
    )
}

const reducer = (state, action) => {
    switch (action.type) {
        case SET_WEATHER_DATA: {
            return { ...state, weatherData: action.payload }
        }
        case SET_DEGREES: {
            return { ...state, degrees: action.payload}
        }
    }
}

export const useWeatherState = () => {
    return React.useContext(WeatherContext).state
}

export const useWeatherActions = () => {
    return React.useContext(WeatherContext).actions
}

