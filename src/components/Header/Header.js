import React, {useEffect, useState} from 'react'
import styles from './Header.module.css'
import {Cities} from './Cities/Cities'
import {useWeatherActions, useWeatherState} from '../../contexts/weather-context'
import {CELSIUS, PHAHRENHEIT} from '../../utils/types'

export const Header = () => {

    const [currentDegree, setCurrentDegree] = useState(null)

    const {degrees} = useWeatherState()
    const {changeDegrees} = useWeatherActions()

    useEffect(() => {
        if (degrees)
            setCurrentDegree(degrees)
    }, [degrees])

    const onClickChangeDegrees = () => {
        currentDegree === CELSIUS
            ? changeDegrees(PHAHRENHEIT)
            : changeDegrees(CELSIUS)
    }

    return <>
        <div className={styles.container}>
            <div>
                <Cities/>
            </div>
            <div>
                <span className={styles.text}>°  </span>
                <button disabled={currentDegree === CELSIUS ? true : false}
                        className={`${styles.button} ${styles.buttonC} ${currentDegree === PHAHRENHEIT && styles.disabled}`}
                        onClick={onClickChangeDegrees}>C
                </button>
                <button disabled={currentDegree === PHAHRENHEIT ? true : false}
                        className={`${styles.button} ${styles.buttonF} ${currentDegree === CELSIUS && styles.disabled}`}
                        onClick={onClickChangeDegrees}>F
                </button>
            </div>
        </div>

    </>
}