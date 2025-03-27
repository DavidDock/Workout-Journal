import {React, useState} from 'react'

import styles from "../../../styles/Workouts.module.css";
import Carousel from 'react-bootstrap/Carousel';

import grey from "../../../assets/greyexercise.svg";

const Workout125 = () => {
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
                    <h3 className='mb-4'>Date: Tue 21.01</h3>
                    <h3 className="mb-4">Body Parts: Legs</h3>
                    <h3 className="mb-4">Duration: 15 minutes</h3>
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
                            <a href='https://en.wikipedia.org/wiki/Squat_(exercise)' target="_blank" rel="noreferrer"
                                aria-label="Wiki for squats (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Air Squats
                            </a>
                        </li>
                        <li>
                            <a href='https://www.livestrong.com/article/559266-are-frog-squats-the-best-way-to-work-out-your-lower-body/' target="_blank" rel="noreferrer"
                                aria-label="Website demonstrating frog squats (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Frog Squats
                            </a>
                        </li>
                        <li>
                            <a href='https://musclewiki.com/Bodyweight/Male/Quads/Bulgarian-Split-Squat' target="_blank" rel="noreferrer"
                                aria-label="Website demonstrating Bulgarian split squat (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Bulgarian Split Squats
                            </a>
                        </li>
                        <li>
                            <a href='https://en.wikipedia.org/wiki/Calf_raises' target="_blank" rel="noreferrer"
                                aria-label="Wiki for Calve Raises (opens in a new tab)" className='text-white text-decoration-underline text-decoration-underline link-secondary'>Standing Calve Raises
                            </a>
                        </li>
                        <li>
                            <a href='https://en.wikipedia.org/wiki/Imaginary_chair' target="_blank" rel="noreferrer"
                                aria-label="Wiki for Wall sit (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Wall Sit
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
                    <ul>
                        <li>40 seconds of Air squats, rest 20 seconds</li>
                        <li>40 seconds of Frog squats, rest 20 seconds</li>
                        <li>20 seconds each leg of Bulgarian split squat, rest 20 seconds</li>
                        <li>40 seconds of Standing Calve Raises, rest 20 seconds</li>
                        <li>40 seconds of Wall sit, rest 20 seconds</li>
                        <li>40 seconds of Air squats, rest 20 seconds</li>
                        <li>40 seconds of Frog squats, rest 20 seconds</li>
                        <li>20 seconds each leg of Bulgarian split squat, rest 20 seconds</li>
                        <li>40 seconds of Standing Calve Raises, rest 20 seconds</li>
                        <li>40 seconds of Wall sit, rest 20 seconds</li>
                        <li>40 seconds of Air squats, rest 20 seconds</li>
                        <li>40 seconds of Frog suats, rest 20 seconds</li>
                        <li>20 seconds each leg of Bulgarian split squat, rest 20 seconds</li>
                        <li>40 seconds of Standing Calve Raises, rest 20 seconds</li>
                        <li>40 seconds of Wall sit, rest 20 seconds</li>
                    </ul>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}

export default Workout125