import {React, useState} from 'react'

import styles from "../../../styles/Workouts.module.css";
import Carousel from 'react-bootstrap/Carousel';

import grey from "../../../assets/greyexercise.svg";

const Workout84 = () => {
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
                    <h3 className='mb-4'>Date: Mon 04.11</h3>
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
                            <a href='https://en.wikipedia.org/wiki/Inverted_row' target="_blank" rel="noreferrer"
                                aria-label="Wiki for Australian Pull-ups (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Australian Pull-ups
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
                        <li>
                            <a href='https://blackbeltwiki.com/hammer-curls' target="_blank" rel="noreferrer"
                                aria-label="Wiki for Hammer curl (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>One arm dumbbell hammer curls
                            </a>
                        </li>
                    </ul>
                    <h3 className='mb-4'>Equipment:</h3>
                    <ul>
                        <li>Pull-Up bar</li>
                        <li>Dumbbell (7kg)</li>
                        <li>Table (For Australian Pull-ups)</li>
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
                    <h4>2 rounds of: </h4>
                    <ul>
                        <li>40 seconds of Pull-ups, rest 20 seconds</li>
                        <li>40 seconds of One arm dumbbell rows, rest 20 seconds</li>
                        <li>40 seconds of Australian pull-ups, rest 20 seconds</li>
                        <li>40 seconds of Chin-ups, rest 20 seconds</li>
                        <li>40 seconds of One arm dumbbell curls, rest 20 seconds</li>
                        <li>40 seconds of One arm hammer curls, rest 20 seconds</li>
                    </ul>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}

export default Workout84