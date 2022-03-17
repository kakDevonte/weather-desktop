import React, {useEffect, useState} from 'react'
import styles from './Footer.module.css'
import {Wind} from "./Wind/Wind";
import {Pressure} from "./Pressure/Pressure";
import {Humidity} from "./Humidity/Humidity";
import {ChanceRain} from "./ChanceRain/ChanceRain";
import {useWeatherState} from "../../contexts/weather-context";

export const Footer = () => {

    const [wind, setWind] = useState(null)
    const [pressure, sePressure] = useState(null)
    const [humidity, setHumidity] = useState(null)
    const [deg, setDeg] = useState(null)

    const {weatherData} = useWeatherState()

    useEffect(() => {
        if (weatherData) {
            setWind(weatherData.wind.speed)
            setDeg(degToDirection(weatherData.wind.deg))
            sePressure(weatherData.main.pressure)
            setHumidity(weatherData.main.humidity)
        }
    }, [weatherData])

    const degToDirection = (deg) => {
        let directions =
            ['Северный', 'Северо-восточный', 'Восточный',
                'Юго-Восточный', 'Южный', 'Юго-Западный',
                'Западный', 'Северо-Западный']
        deg += 22.5
        if (deg < 0)
            deg = 360 - Math.abs(deg) % 360
        else
            deg = deg % 360;
        let w = parseInt(deg / 45)
        return `${directions[w]}`
    }

    return <>
        <div className={styles.container}>
            <div>
                <Wind wind={wind} deg={deg}/>
            </div>
            <div>
                <Pressure pressure={pressure}/>
            </div>
            <div>
                <Humidity humidity={humidity}/>
            </div>
            <div>
                <ChanceRain/>
            </div>
        </div>
    </>
}