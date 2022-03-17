import React from 'react'
import styles from '../Footer.module.css'

export const Wind = (props) => {

    return <>
        <div>
            <span className={`${styles.main} ${styles.text}`}>Ветер</span>
        </div>
        <div>
            <span className={`${styles.text} ${styles.dataText}`}>{props.wind} м/c, {props.deg}</span>
        </div>
    </>
}