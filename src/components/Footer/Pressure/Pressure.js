import React from 'react'
import styles from '../Footer.module.css'

export const Pressure = (props) => {

    return <>
        <div>
            <span className={`${styles.main} ${styles.text}`}>Давление</span>
        </div>
        <div>
            <span className={`${styles.text} ${styles.dataText}`}>{props.pressure} мм рт. ст.</span>
        </div>
    </>
}