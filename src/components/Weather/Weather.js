import React, {useEffect, useState} from 'react'
import styles from './Weather.module.css'
import partlyCloudy from './../../utils/image/partly cloudy.png'
import rain from './../../utils/image/rain.png'
import strom from './../../utils/image/strom.png'
import sun from './../../utils/image/sun.png'
import cloud from './../../utils/image/cloud.png'
import {useWeatherState} from '../../contexts/weather-context'
import {CELSIUS, PHAHRENHEIT} from '../../utils/types'

export const Weather = () => {

    const [degree, setDegree] = useState(null)
    const [description, setDescription] = useState('')
    const [image, setImage] = useState(sun)
    const {weatherData, degrees} = useWeatherState()

    useEffect(() => {
        if (weatherData) {
            setDegree(degreeConversion(weatherData.main.temp, degrees))

            let result = firstLetterToUppercase(weatherData.weather[0].description)
            setDescription(result)

            setImage(changeImage(weatherData.weather[0].main))
        }
    }, [weatherData])

    useEffect(() => {
        if (degrees && weatherData) {
            setDegree(degreeConversion(weatherData.main.temp, degrees))
        }
    }, [degrees])

    const degreeConversion = (degree, type) => {
        switch (type) {
            case PHAHRENHEIT: {
                return Math.round(degree * 1, 8 - 459, 67)
            }
            case CELSIUS: {
                return Math.round(degree - 273)
            }
        }
    }

    const changeImage = type => {
        switch (type){
            case 'Cloud': {
                return cloud
            }
            case 'Clear': {
                return sun
            }
            case 'Rain': {
                return rain
            }
            case 'Strom': {
                return strom
            }
            case 'Clouds': {
                return partlyCloudy
            }
            default: {
                return sun
            }
        }
    }

    const  firstLetterToUppercase = str => {
        return str[0].toUpperCase() + str.slice(1)
    }

    return <>
        <div className={styles.body}>
            <div className={styles.item}>
                <img src={image}/>
                <span className={`${styles.text} ${styles.degree}`}>{degree}°</span>
            </div>
            <div className={styles.item}>
                <span className={`${styles.text} ${styles.weather}`}>{description}</span>
            </div>
        </div>
    </>
}