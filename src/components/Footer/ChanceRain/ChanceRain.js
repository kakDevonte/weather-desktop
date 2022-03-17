import React from 'react'
import styles from '../Footer.module.css'

export const ChanceRain = () => {

    return <>
        <div>
            <span className={`${styles.main} ${styles.text}`}>Вероятность дождя</span>
        </div>
        <div>
            <span className={`${styles.text} ${styles.dataText}`}>10%</span>
        </div>
    </>
}