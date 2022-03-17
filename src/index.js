import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {WeatherContextProvider} from './contexts/weather-context'

ReactDOM.render(
    <React.StrictMode>
        <WeatherContextProvider>
            <App/>
        </WeatherContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
)

reportWebVitals()
