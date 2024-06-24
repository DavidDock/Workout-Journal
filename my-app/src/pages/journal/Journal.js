import React from 'react'

import styles from "../../styles/Journal.module.css";

import diary from "../../assets/diary.svg";


const Journal = () => {
    return (
        <div>
            <div className={`bg-white w-75 mx-auto ${styles.HeadingContainer}`}>
                <img
                    src={diary}
                    alt="Journal with a pen"
                    height="200"
                    className={`mx-auto p-2 ${styles.HeroImage}`}></img>
                <h2 className={`d-none d-md-block ml-auto my-4`}>Journal</h2>
                <h2 className={`d-md-none ${styles.Heading}`}>Journal</h2>
                <p className={`${styles.Para}`}>This is my workout journal showing my daily workouts. I will be adding to this regually to keep myself motivated and hopefully provide inspiration.<br></br>
                Feel free to follow along, they all should be fairly short in length and require minimal equipment.
                </p>
            </div>
        </div>
    )
}

export default Journal