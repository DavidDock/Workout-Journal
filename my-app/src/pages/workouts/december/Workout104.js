import {React, useState} from 'react'

import styles from "../../../styles/Workouts.module.css";
import Carousel from 'react-bootstrap/Carousel';

import grey from "../../../assets/greyexercise.svg";

const Workout104 = () => {
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
                    <h3 className='mb-4'>Date: Thurs 05.12</h3>
                    <h3 className="mb-4">Body Parts: Shoulders, Biceps & Triceps</h3>
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
                            <a href='https://musclewiki.com/bodyweight/male/triceps/bench-dips' target="_blank" rel="noreferrer"
                                aria-label="Website demonstration for tricep dips (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Tricep Dips
                            </a>
                        </li>
                        <li>
                            <a href='https://en.wikipedia.org/wiki/Bicep_curl' target="_blank" rel="noreferrer"
                                aria-label="Wiki for Bicep curl (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>One arm dumbbell bicep curls
                            </a>
                        </li>
                        <li>
                            <a href='https://www.wikihow.com/Do-Pike-Push-Ups' target="_blank" rel="noreferrer"
                                aria-label="Website demonstrating pike press-ups (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Pike Press-Ups
                            </a>
                        </li>
                    </ul>
                    <h3 className='mb-4'>Equipment:</h3>
                    <ul>
                        <li>Deck of Cards</li>
                        <li>Dumbbell (7kg)</li>
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
                    <ul>
                        <li>Shuffle the pack of cards with three of the suits</li>
                        <li>Allocate Tricep Dips, Dumbel Curl and Pike press-ups each to a suit (e.g Dips = hearts)</li>
                        <li>Turn over a card and do the amount of reps on the card of allocated exercise (picture card = 10)</li>
                        <li>Repeat until all the cards are turned over</li>
                    </ul>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}

export default Workout104