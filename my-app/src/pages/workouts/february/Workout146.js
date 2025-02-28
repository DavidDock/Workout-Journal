import {React, useState} from 'react'

import styles from "../../../styles/Workouts.module.css";
import Carousel from 'react-bootstrap/Carousel';

import grey from "../../../assets/greyexercise.svg";

const Workout146 = () => {
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
                    <h3 className='mb-4'>Date: Thurs 27.02</h3>
                    <h3 className="mb-4">Body Parts: Biceps, Triceps and Calves</h3>
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
                            <a href='https://en.wikipedia.org/wiki/Bicep_curl' target="_blank" rel="noreferrer"
                                aria-label="Wiki for Bicep curl (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>One arm dumbbell bicep curls
                            </a>
                        </li>
                        <li>
                            <a href='https://www.menshealth.com/uk/how-tos/a61067857/skull-crushers/' target="_blank" rel="noreferrer"
                                aria-label="Website with instructions for skull-crushers (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Skull crushers
                            </a>
                        </li>
                        <li>
                            <a href='https://en.wikipedia.org/wiki/Calf_raises' target="_blank" rel="noreferrer"
                                aria-label="Wiki for Calve Raises (opens in a new tab)" className='text-white text-decoration-underline text-decoration-underline link-secondary'>Standing Calve Raises
                            </a>
                        </li>
                        <li>
                            <a href='https://en.wiktionary.org/wiki/chin-up' target="_blank" rel="noreferrer"
                                aria-label="Wiki for Chin-ups (opens in a new tab)" className='text-white text-decoration-underline text-decoration-underline link-secondary'>Chin-ups
                            </a>
                        </li>
                        <li>
                            <a href='https://www.wikihow.com/Do-a-Diamond-Pushup' target="_blank" rel="noreferrer"
                                aria-label="Website demonstration for diamond press-ups (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Diamond Press-ups
                            </a>
                        </li>
                    </ul>
                    <h3 className='mb-4'>Equipment:</h3>
                    <ul>
                        <li>Pull-Up bar</li>
                        <li>Dumbbell (10kg)</li>
                        <li>Raised surface</li>
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
                    <h4>Set 12 minute timer and perform as many rounds as possible </h4>
                    <ul>
                        <li>dumbbell curl - 10 reps each arm</li>
                        <li>skull crusher - 10 reps</li>
                        <li>calve raises - 25 reps</li>
                        <li>chin ups - 10 reps</li>
                        <li>diamond push-ups - 20 reps</li>
                        <li>calve raises - 25 reps</li>
                    </ul>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}

export default Workout146