import './App.css'
import {useEffect, useState} from 'react'
import {Header} from './components/Header/Header'
import {Weather} from './components/Weather/Weather'
import {Footer} from './components/Footer/Footer'
import {useWeatherActions} from './contexts/weather-context'
import {getAddress} from './utils/current-geolocation'

function App() {

    const { fetchWeatherDataByCoordinate } = useWeatherActions()

    useEffect(() => {
        const fetchCoordinate = async () => {
            const { lat, lon } = await getAddress()
            fetchWeatherDataByCoordinate(lat, lon)
        }
        fetchCoordinate()
    }, [])

    return (
        <div className="App">
            <div className="gridItem">
                <Header/>
            </div>
            <div className="gridItem">
                <Weather/>
            </div>
            <div className="gridItem">
                <Footer />
            </div>
        </div>
    )
}

export default App
