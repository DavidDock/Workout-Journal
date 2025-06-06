import {React, useState} from 'react'

import styles from "../../../styles/Workouts.module.css";
import Carousel from 'react-bootstrap/Carousel';

import grey from "../../../assets/greyexercise.svg";

const Workout166 = () => {
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
                    <h3 className='mb-4'>Date: Weds 26.03</h3>
                    <h3 className="mb-4">Body Parts: Legs and Cardio</h3>
                    <h3 className="mb-4">Duration: 30 minutes</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={styles.CarouselItem}>
                <img
                    src={grey}
                    alt="background"
                    className={styles.CarouselImage}>
                </img>
                <Carousel.Caption className={`my-auto ${styles.CarouselContent}`}>
                    <h3 className='mb-4'>Workout</h3>
                    <ul>
                        <li>
                            <a href='https://en.wikipedia.org/wiki/Squat_(exercise)' target="_blank" rel="noreferrer"
                                aria-label="Wiki for squats (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>100 - Air Squats
                            </a>
                        </li>
                        <li>
                            1 Mile Run
                        </li>
                        <li>
                            <a href='https://en.wikipedia.org/wiki/Squat_(exercise)' target="_blank" rel="noreferrer"
                                aria-label="Wiki for squats (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>100 - Air Squats
                            </a>
                        </li>                        
                        <li>
                            <a href='https://en.wikipedia.org/wiki/Calf_raises' target="_blank" rel="noreferrer"
                                aria-label="Wiki for Calve Raises (opens in a new tab)" className='text-white text-decoration-underline text-decoration-underline link-secondary'>100 - Standing Calve Raises
                            </a>
                        </li>
                        <li>
                            <a href='https://musclewiki.com/Bodyweight/Male/Quads/Bulgarian-Split-Squat' target="_blank" rel="noreferrer"
                                aria-label="Website demonstrating Bulgarian split squat (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>50 Bulgarian Split Squats each leg
                            </a>
                        </li>
                        <li>
                            1 Mile Run
                        </li>
                    </ul>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}

export default Workout166