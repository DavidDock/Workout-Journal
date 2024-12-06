import {React, useState} from 'react'

import styles from "../../../styles/Workouts.module.css";
import Carousel from 'react-bootstrap/Carousel';

import grey from "../../../assets/greyexercise.svg";

const Workout102 = () => {
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
                    <h3 className='mb-4'>Date: Tue 03.12</h3>
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
                            <a href='https://thenx.com/exercises/976' target="_blank" rel="noreferrer"
                                aria-label="Website demonstrating frog squats (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Frog Squats
                            </a>
                        </li>
                        <li>
                            <a href='https://en.wikipedia.org/wiki/Calf_raises' target="_blank" rel="noreferrer"
                                aria-label="Wiki for Calve Raises (opens in a new tab)" className='text-white text-decoration-underline text-decoration-underline link-secondary'>Standing Calve Raises
                            </a>
                        </li>
                    </ul>
                    <h3 className='mb-4'>Equipment:</h3>
                    <ul>
                        <li>Deck of Cards</li>
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
                        <li>Shuffle the pack of cards with three of the suits</li>
                        <li>Allocate squats, calve raises and frog suats each to a suit (e.g suats = hearts)</li>
                        <li>Turn over a card and do the amount of reps on the card of allocated exercise (picture card = 10)</li>
                        <li>Repeat until all the cards are turned over</li>
                    </ul>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}

export default Workout102