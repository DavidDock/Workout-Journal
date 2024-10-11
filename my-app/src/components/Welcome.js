import React from 'react'

import styles from "../../src/styles/Welcome.module.css";
import grey from "../../src/assets/greyexercise.svg";


const Welcome = () => {
    return (
        <div className={styles.Main}>
            <h2 className={styles.WelcomeStay}>STAY</h2>
            <img
                src={grey}
                alt="background"
                className={styles.WelcomeImage}>
            </img>
            <h2 className={styles.WelcomeStrong}>STRONG</h2>
            
        </div>
    )
}

export default Welcome