import {React, useState} from 'react'

import styles from "../../../styles/Workouts.module.css";
import Carousel from 'react-bootstrap/Carousel';

import grey from "../../../assets/greyexercise.svg";

const Workout203 = () => {
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
                    <h3 className='mb-4'>Date: Tue 10.06</h3>
                    <h3 className="mb-4">Body Parts: Back and Biceps</h3>
                    <h3 className="mb-4">Duration: 12 minutes</h3>
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
                            <a href='https://en.wikipedia.org/wiki/Pull-up_(exercise)' target="_blank" rel="noreferrer"
                                aria-label="Wiki for pull-ups (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Pull-Ups
                            </a>
                        </li>
                        <li>
                            <a href='https://en.wikipedia.org/wiki/Bent-over_row' target="_blank" rel="noreferrer"
                                aria-label="Wiki for one arm row (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>One arm dumbbell row
                            </a>
                        </li>
                        <li>
                            <a href='https://en.wiktionary.org/wiki/chin-up' target="_blank" rel="noreferrer"
                                aria-label="Wiki for Chin-ups (opens in a new tab)" className='text-white text-decoration-underline text-decoration-underline link-secondary'>Chin-ups
                            </a>
                        </li>
                        <li>
                            <a href='https://en.wikipedia.org/wiki/Bicep_curl' target="_blank" rel="noreferrer"
                                aria-label="Wiki for Bicep curl (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>One arm dumbbell bicep curls
                            </a>
                        </li>
                    </ul>
                    <h3 className='mb-4'>Equipment:</h3>
                    <ul>
                        <li>Pull-Up bar</li>
                        <li>Dumbbell (7kg)</li>
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
                    <ul>
                        <li>40 seconds Pull Ups, rest 20 seconds</li>
                        <li>20 seconds each arm of One Arm Row, rest 20 seconds</li>
                        <li>40 seconds of Chin Ups, rest 20 seconds</li>
                        <li>20 seconds each arm of One Arm Bicep Curl, rest 20 seconds</li>
                        <li>Hang on Chin up bar for max time, 1 minute rest</li>
                    </ul>
                    <p>Completed 2 rounds</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}

export default Workout203