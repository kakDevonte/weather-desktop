import React from 'react'
import styles from '../Footer.module.css'

export const Humidity = (props) => {

    return <>
        <div>
            <span className={`${styles.main} ${styles.text}`}>Влажность</span>
        </div>
        <div>
            <span className={`${styles.text} ${styles.dataText}`}>{props.humidity}%</span>
        </div>
    </>
}