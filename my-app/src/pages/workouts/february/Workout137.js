import {React, useState} from 'react'

import styles from "../../../styles/Workouts.module.css";
import Carousel from 'react-bootstrap/Carousel';

import grey from "../../../assets/greyexercise.svg";

const Workout137 = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (

        <Carousel activeIndex={index} onSelect={handleSelect} interval={null} className={styles.CarouselMain}>
            <Carousel.Item className={styles.CarouselItem}>
                <img
                    src={grey}
                    alt="background"
                    className={styles.CarouselImage}>
                </img>
                <Carousel.Caption className={`my-auto ${styles.CarouselContent}`}>
                    <h3 className='mb-4'>Date: Thur 13.02</h3>
                    <h3 className="mb-4">Body Parts: Biceps and Back</h3>
                    <h4>Bicep workout <br></br>Plus pull/chin up 10 day challenge</h4>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={styles.CarouselItem}>
                <img
                    src={grey}
                    alt="background"
                    className={styles.CarouselImage}>
                </img>
                <Carousel.Caption className={`my-auto ${styles.CarouselContent}`}>
                    <h3 className='mb-4'>Exercises:</h3>
                    <ul>
                        <li>
                            <a href='https://en.wikipedia.org/wiki/Bicep_curl' target="_blank" rel="noreferrer"
                                aria-label="Wiki for Bicep curl (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>One arm dumbbell bicep curls
                            </a>
                        </li>
                        <li>
                            <a href='https://en.wikipedia.org/wiki/Pull-up_(exercise)' target="_blank" rel="noreferrer"
                                aria-label="Wiki for pull-ups (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Pull-Ups
                            </a>
                        </li>
                        <li>
                            <a href='https://en.wiktionary.org/wiki/chin-up' target="_blank" rel="noreferrer"
                                aria-label="Wiki for Chin-ups (opens in a new tab)" className='text-white text-decoration-underline text-decoration-underline link-secondary'>Chin-ups
                            </a>
                        </li>
                    </ul>
                    <h3 className='mb-4'>Equipment:</h3>
                    <ul>
                        <li>Pull-Up bar</li>
                        <li>Dumbell (7kg)</li>
                    </ul>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={styles.CarouselItem}>
                <img
                    src={grey}
                    alt="background"
                    className={styles.CarouselImage}>
                </img>
                <Carousel.Caption className={`my-auto ${styles.CarouselContent}`}>
                    <h3>Workout</h3>
                    <p>100 one arm bicep curls (50 each arm)<br></br>Continuous set switching arms until 100 reps are complete.</p>
                    <p>Plus day 4 of the 10 day 100 rep pull/chin up challenge (spread throughout the day)</p><br></br>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}

export default Workout137