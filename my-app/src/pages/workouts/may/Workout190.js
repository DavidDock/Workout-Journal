import {React, useState} from 'react'

import styles from "../../../styles/Workouts.module.css";
import Carousel from 'react-bootstrap/Carousel';

import grey from "../../../assets/greyexercise.svg";

const Workout190 = () => {
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
                    <h3 className='mb-4'>Date: Mon 12/05</h3>
                    <h3 className="mb-4">Body Parts: Back and Legs</h3>
                    <h3 className="mb-4">Duration: Throughout the Day</h3>
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
                    <p>
                        300 <a href='https://en.wikipedia.org/wiki/Pull-up_(exercise)' target="_blank" rel="noreferrer"
                                aria-label="Wiki for pull-ups (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Pull-Ups
                            </a><br></br>
                        300 <a href='https://en.wikipedia.org/wiki/Squat_(exercise)' target="_blank" rel="noreferrer"
                            aria-label="Wiki for squats (opens in a new tab)" className='text-white text-decoration-underline link-secondary'> Air Squats
                        </a>
                    </p>
                    <p>
                        Start from 24 reps of both exercises and work your way down to 1 rep, I completed this workout as and when I could throughout the day.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}

export default Workout190