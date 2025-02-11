import {React, useState} from 'react'

import styles from "../../../styles/Workouts.module.css";
import Carousel from 'react-bootstrap/Carousel';

import grey from "../../../assets/greyexercise.svg";

const Workout135 = () => {
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
                    <h3 className='mb-4'>Date: Tue 11.02</h3>
                    <h3 className="mb-4">Body Parts: Legs and Back</h3>
                    <h4>Summary: Mini Leg workout plus the pull/chin up 10 day challenge</h4>
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
                            <a href='https://blackbeltwiki.com/pistol-squats' target="_blank" rel="noreferrer"
                                aria-label="Website demonstrating pistol squats (opens in a new tab)" className='text-white text-decoration-underline text-decoration-underline link-secondary'>Pistol Squats
                            </a>
                        </li>
                        <li>
                            <a href='https://thenx.com/exercises/976' target="_blank" rel="noreferrer"
                                aria-label="Website demonstrating frog squats (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Frog Squats
                            </a>
                        </li>
                        <li>
                            <a href='https://blackbeltwiki.com/single-leg-bridge' target="_blank" rel="noreferrer"
                                aria-label="Website demonstrating single leg bridge (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Single Leg Bridge
                            </a>
                        </li>
                        <li>
                            <a href='https://en.wikipedia.org/wiki/Squat_(exercise)' target="_blank" rel="noreferrer"
                                aria-label="Wiki for squats (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Air Squats
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
                    <p>Three rounds of the following mini workout:</p>
                    <ul>
                        <li>Pistol Squat 10 reps, 5 reps each leg</li>
                        <li>Frog Squats 15 reps</li>
                        <li>Single Leg Bridge, 10 reps each leg</li>
                        <li>Squats 25 reps</li>
                        <li>1 Minute rest</li>
                    </ul>
                    <p>Plus day 2 of the 10 day 100 rep pull/chin up challenge (spread throughout the day)</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}

export default Workout135