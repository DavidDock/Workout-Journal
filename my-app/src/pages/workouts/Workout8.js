import {React, useState} from 'react'

import styles from "../../styles/Workouts.module.css";
import Carousel from 'react-bootstrap/Carousel';

import grey from "../../assets/greyexercise.svg";

const Workout8 = () => {
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
                    <h3 className='mb-4'>Date: Wed 03.07</h3>
                    <h3 className="mb-4">Body Parts: Back</h3>
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
                            <a href='https://en.wikipedia.org/wiki/Pull-up_(exercise)' target="_blank" rel="noreferrer"
                                aria-label="Wiki for pull-ups (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Pull-Ups
                            </a>
                        </li>
                        <li>
                            <a href='https://www.thenx.com/exercises/570' target="_blank" rel="noreferrer"
                                aria-label="Website with instructions for superman pumps (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Superman pumps
                            </a>
                        </li>
                        <li>
                            <a href='https://en.wikipedia.org/wiki/Bent-over_row' target="_blank" rel="noreferrer"
                                aria-label="Wiki for one arm row (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>One arm dumbbell row
                            </a>
                        </li>
                    </ul>
                    <h3 className='mb-4'>Equipment:</h3>
                    <ul>
                        <li>Pull-Up bar</li>
                        <li>Dumbbell (10kg)</li>
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
                        <li>Max pull-ups</li>
                        <li>25 superman pumps</li>
                        <li>one arm rows - 10 each</li>
                        <li>Max bar hang</li>
                        <li>one minute rest</li>
                    </ul>
                    <p>Completed 2 rounds</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}

export default Workout8