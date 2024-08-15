import {React, useState} from 'react'

import styles from "../../../styles/Workouts.module.css";
import Carousel from 'react-bootstrap/Carousel';

import grey from "../../../assets/greyexercise.svg";

const Workout31 = () => {
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
                    <h3 className='mb-4'>Date: Wed 14.08</h3>
                    <h3 className="mb-4">Body Parts: Legs</h3>
                    <h3 className="mb-4">Duration: 9 minutes</h3>
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
                    <h4>3 rounds. Each exercise fo 1 minute, no rest between exercises. </h4>
                    <ul>
                        <li>
                            <a href='https://blackbeltwiki.com/pistol-squats' target="_blank" rel="noreferrer"
                                aria-label="Website demonstrating pistol squats (opens in a new tab)" className='text-white text-decoration-underline text-decoration-underline link-secondary'>Pistol Squats (30 seconds each leg)
                            </a>
                        </li>
                        <li>
                            <a href='https://en.wikipedia.org/wiki/Calf_raises' target="_blank" rel="noreferrer"
                                aria-label="Wiki for Calve Raises (opens in a new tab)" className='text-white text-decoration-underline text-decoration-underline link-secondary'>Standing Calve Raises
                            </a>
                        </li>
                        <li>
                            <a href='https://thenx.com/exercises/976' target="_blank" rel="noreferrer"
                                aria-label="Website demonstrating frog squats (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Frog Squats
                            </a>
                        </li>
                    </ul>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}

export default Workout31