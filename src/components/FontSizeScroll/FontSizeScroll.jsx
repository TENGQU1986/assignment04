import React, { useState} from 'react'
import { Button } from '@material-ui/core'

import styles from './FontSizeScroll.module.css'



const FontSizeScroll = (props) => {
    const [fontSize, setFontSize] = useState(30)

    const onWheelScoll = (e) => {
            e.deltaY < 0 ? fontSize <= 100 && setFontSize(fontSize + 1) : fontSize >= 20 && setFontSize(fontSize - 1)
    }

    const onNextPage = () => {
        props.nextStep()
    }

    const onPrevPage = () => {
        props.prevStep()
    }

    return (
        <div onWheel={onWheelScoll} className={styles.container}>
            <p style={{ fontSize }} className={styles.text}>Roll the mouse wheel over me</p>
            <div className={styles.navButtons}>
                <Button onClick={onPrevPage}>Back</Button>
                <Button onClick={onNextPage}>Next</Button>
            </div>
        </div>
    )
}

export default FontSizeScroll