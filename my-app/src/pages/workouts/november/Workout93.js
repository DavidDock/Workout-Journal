import {React, useState} from 'react'

import styles from "../../../styles/Workouts.module.css";
import Carousel from 'react-bootstrap/Carousel';

import grey from "../../../assets/greyexercise.svg";

const Workout93 = () => {
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
                    <h3 className='mb-4'>Date: Mon 19.11</h3>
                    <h3 className="mb-4">Body Parts: Chest</h3>
                    <h3 className="mb-4">Duration: 10 minutes</h3>
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
                            <a href='https://www.masterclass.com/articles/archer-push-up-guide' target="_blank" rel="noreferrer"
                                aria-label="How to do Archer press-ups (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Archer Press-Ups
                            </a>
                        </li>
                        <li>
                            <a href='https://en.wikipedia.org/wiki/Push-up' target="_blank" rel="noreferrer"
                                aria-label="Wiki for press-ups (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Press-Ups
                            </a>
                        </li>
                        <li>
                            <a href='https://musclewiki.com/bodyweight/male/chest/incline-push-up' target="_blank" rel="noreferrer"
                                aria-label="Wiki for incline push-ups (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Incline push-ups
                            </a>
                        </li>
                        <li>
                            <a href='https://musclewiki.com/bodyweight/female/chest/decline-push-up' target="_blank" rel="noreferrer"
                                aria-label="Wiki for decline push-ups (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Decline push-ups
                            </a>
                        </li>
                    </ul>
                    <h3 className='mb-4'>Equipment:</h3>
                    <ul>
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
                    <ul>
                        <li>40 seconds of Decline Press Ups, rest 20 seconds</li>
                        <li>40 seconds of Archer Press Ups, rest 20 seconds</li>
                        <li>40 seconds of Press Ups, rest 20 seconds</li>
                        <li>40 seconds of Incline Press Ups, rest 20 seconds</li>
                        <li>40 seconds of Slow Press Ups, rest 20 seconds</li>
                    </ul>
                    <p>Completed 2 rounds</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}

export default Workout93