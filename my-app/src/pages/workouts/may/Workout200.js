import {React, useState} from 'react'

import styles from "../../../styles/Workouts.module.css";
import Carousel from 'react-bootstrap/Carousel';

import grey from "../../../assets/greyexercise.svg";

const Workout200 = () => {
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
                    <h3 className='mb-4'>Date: Wed 28.05</h3>
                    <h3 className="mb-4">Body Parts: Legs and Shoulders</h3>
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
                            <a href='https://blackbeltwiki.com/pistol-squats' target="_blank" rel="noreferrer"
                                aria-label="Website demonstrating pistol squats (opens in a new tab)" className='text-white text-decoration-underline text-decoration-underline link-secondary'>Pistol Squats
                            </a>
                        </li>
                        <li>
                            <a href='https://www.livestrong.com/article/559266-are-frog-squats-the-best-way-to-work-out-your-lower-body/' target="_blank" rel="noreferrer"
                                aria-label="Website demonstrating frog squats (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Frog Squats
                            </a>
                        </li>
                        <li>
                            <a href='https://blackbeltwiki.com/single-leg-bridge' target="_blank" rel="noreferrer"
                                aria-label="Website demonstrating single leg bridge (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Single Leg Bridge
                            </a>
                        </li>
                        <li>
                            <a href='https://en.wikipedia.org/wiki/Squat_(exercise)' target="_blank" rel="noreferrer"
                                aria-label="Wiki for squats (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Air Squats
                            </a>
                        </li>
                        <li>
                            <a href='https://www.bodybuilding.com/exercises/one-arm-side-laterals#:~:text=While%20maintaining%20the%20torso%20stationary,a%20second%20at%20the%20top.' target="_blank" rel="noreferrer"
                                aria-label="Website demonstrating One arm dumbbell side lateral raise (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>One arm dumbbell side lateral raise
                            </a>
                        </li>
                        <li>
                            <a href='https://www.bodybuilding.com/exercises/single-dumbbell-raise' target="_blank" rel="noreferrer"
                                aria-label="Website demonstrating One arm dumbbell front raise (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>One arm dumbbell front raise
                            </a>
                        </li>
                        <li>
                            <a href='https://sweat.com/exercises/single-arm-bent-over-reverse-fly' target="_blank" rel="noreferrer"
                                aria-label="Website demonstrating One arm bent over dumbbell reverse fly (opens in a new tab)" className='text-white text-decoration-underline text-decoration-underline link-secondary'>One arm bent over dumbbell reverse fly
                            </a>
                        </li>
                        <li>
                            <a href='https://musclewiki.com/dumbbells/male/shoulders/dumbbell-single-arm-overhead-press/' target="_blank" rel="noreferrer"
                                aria-label="Website demonstrating One arm dumbbell shoulder press (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>One arm dumbell shoulder press
                            </a>
                        </li>
                    </ul>
                    <h3 className='mb-4'>Equipment:</h3>
                    <ul>
                        <li>Dumbell (7kg)</li>
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
                    <p>2 rounds, 1 minute break after each round.  </p>
                    <ul>
                        <li>Pistol Squat 10 reps</li>
                        <li>Side Lateral Raise, 8 reps each arm</li>
                        <li>Frog Squats 15 reps</li>
                        <li>Dumbbell front raise, 8 reps each arm</li>
                        <li>Single Leg Bridge, 10 reps each leg</li>
                        <li>Dumbbell reverse fly, 8 reps each arm</li>
                        <li>Squats 15 reps</li>
                        <li>Dumbbell Press, 8 reps each arm</li>
                    </ul>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}

export default Workout200