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
            <p className={`${styles.Para}`}><b>I'm a forty year old man trying to stay strong and in shape.</b><br></br>
            I used to workout five times a week and found plenty time to look after myself. I was happy with my finess, strengh and physique. But as I have got older my priorities and responsibilities have changed.<br></br>
            Nowdays my aging self has less energy and motivation. Between work and most importantly, family I do not workout nearly as much as I should. My vien self wants to stay looking in decent shape and I want to stay strong enough to out lift my kids well into their teens.<br></br>
            I have come to see that doing just a little something is better than doing nothing. I have been doing workouts little and often, all pretty much at home when I have time and using minimal equipment. I have been pleased with the results.<br></br>
            I have built this website to keep a diary of these workouts (typically under 15 minutes in length) to keep myself motivated and to share with anyone that cares.
            </p>
        </div>
    )
}

export default About