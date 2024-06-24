import React from 'react'

import styles from "../../styles/Error.module.css";

import error from "../../assets/error.svg";


const errorpage = () => {
    return (
        <div>
            <div className={`bg-white w-75 mx-auto ${styles.HeadingContainer}`}>
                <img
                    src={error}
                    alt="page not found"
                    height="200"
                    className={`mx-auto p-2 ${styles.HeroImage}`}></img>
                <h2 className={`d-none d-md-block ml-auto my-4`}>Not Found</h2>
                <h2 className={`d-md-none ${styles.Heading}`}>Not Found</h2>
                <p className={`${styles.Para}`}>Sorry, looks like something has gone wrong. Please try another page.
                </p>
            </div>
        </div>
    )
}

export default errorpage