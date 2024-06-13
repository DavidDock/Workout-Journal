import React from 'react'

import styles from "../../styles/About.module.css";

import homeexercise from "../../assets/homeexercise.svg";

const About = () => {
    return (
        <div className={`bg-white w-75 mx-auto ${styles.MainContainer}`}>
            <img
                src={homeexercise}
                alt="working out at home"
                height="200"
                className={`mx-auto p-2 ${styles.HeroImage}`}></img>
            <h2 className={`d-none d-md-block ml-auto my-4`}>About</h2>
            <h2 className={`d-md-none ${styles.Heading}`}>About</h2>
            <p className={`${styles.Para}`}>Hello to all interested in the creation of nonsense and a load of crazt talk. I can only spell simle words and can type relativly slow without making mistakes. The end</p>
        </div>
    )
}

export default About