import React, {useEffect, useState} from 'react'
import styles from './Cities.module.css'
import location from '../../../utils/image/location.png'
import {useWeatherActions, useWeatherState} from '../../../contexts/weather-context'
import {getAddress} from "../../../utils/current-geolocation";

export const Cities = () => {
    const [isChangeCity, setIsChangeCity] = useState(false)
    const [currentCity, setCurrentCity] = useState('')
    const [city, setCity] = useState(null)

    const {weatherData} = useWeatherState()
    const {fetchWeatherDataByCity, fetchWeatherDataByCoordinate} = useWeatherActions()

    useEffect(() => {
        if (weatherData) {
            setCity(weatherData.name)
        }
    }, [weatherData])

    const onClickChangeCity = () => {
        fetchWeatherDataByCity(currentCity)
        setCurrentCity('')
        setIsChangeCity(!isChangeCity)
    }

    const onClickSelectCity = () => {
        setIsChangeCity(!isChangeCity)
    }

    const onClickMyLocation = () => {
        const fetchCoordinate = async () => {
            const {lat, lon} = await getAddress()
            fetchWeatherDataByCoordinate(lat, lon)
        }
        fetchCoordinate()
    }

    const onChangeCity = e => setCurrentCity(e.target.value)

    return <>
        <div className={styles.container}>
            {isChangeCity
                ? <div className={styles.modal}>
                    <input placeholder="Введите название города" onChange={onChangeCity}/>
                    <button onClick={onClickChangeCity}>Ок</button>
                </div>
                : <div>
                    <div>
                        <span className={`${styles.main} ${styles.text}`}>{city}</span>
                    </div>
                    <div className={styles.item}>
                        <button className={styles.button} onClick={onClickSelectCity}>
                            <span className={`${styles.secondary} ${styles.text}`}>Сменить город</span>
                        </button>
                        <button className={styles.button}>
                            <img className={styles.image} src={location}/>
                            <span onClick={onClickMyLocation}
                                  className={`${styles.secondary} ${styles.text}`}> Мое местоположение</span>
                        </button>
                    </div>
                </div>}
        </div>

    </>
}