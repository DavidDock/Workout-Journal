import {React, useState} from 'react'

import styles from "../../../styles/Workouts.module.css";
import Carousel from 'react-bootstrap/Carousel';

import grey from "../../../assets/greyexercise.svg";

const Workout185 = () => {
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
                    <h3 className='mb-4'>Date: Tue 29.04</h3>
                    <h3 className="mb-4">Body Parts: Back and Chest</h3>
                    <h3 className="mb-4">Duration: 20 minutes</h3>
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
                            <a href='https://en.wikipedia.org/wiki/Inverted_row' target="_blank" rel="noreferrer"
                                aria-label="Wiki for Australian Pull-ups (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Australian Pull-ups
                            </a>
                        </li>
                        <li>
                            <a href='https://en.wikipedia.org/wiki/Push-up' target="_blank" rel="noreferrer"
                                aria-label="Wiki for press-ups (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Press-Ups
                            </a>
                        </li>
                        <li>
                            <a href='https://musclewiki.com/bodyweight/female/chest/decline-push-up' target="_blank" rel="noreferrer"
                                aria-label="Wiki for decline push-ups (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Decline push-ups
                            </a>
                        </li>
                        <li>
                            <a href='https://musclewiki.com/bodyweight/male/chest/incline-push-up' target="_blank" rel="noreferrer"
                                aria-label="Wiki for incline push-ups (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Incline push-ups
                            </a>
                        </li>
                    </ul>
                    <h3 className='mb-4'>Equipment:</h3>
                    <ul>
                        <li>Pull-Up bar</li>
                        <li>Table (For Australian Pull-ups)</li>
                        <li>Raised Surface</li>
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
                    <h4>3 rounds with maximum reps of: </h4>
                    <ul>
                        <li>Decline press-ups</li>
                        <li>Pull-Ups</li>
                        <li>Rest 60 seconds</li>
                        <li>Press-Ups</li>
                        <li>Jump Pull-ups</li>
                        <li>Rest 60 seconds</li>
                        <li>Incline press-ups</li>
                        <li>Australian pull-ups</li>
                        <li>Rest 60 seconds</li>
                    </ul>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}

export default Workout185