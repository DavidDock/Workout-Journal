import {React, useState} from 'react'

import styles from "../../../styles/Workouts.module.css";
import Carousel from 'react-bootstrap/Carousel';

import grey from "../../../assets/greyexercise.svg";

const Workout204 = () => {
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
                    <h3 className='mb-4'>Date: Wed 11.06</h3>
                    <h3 className="mb-4">Body Parts: Shoulders and Triceps</h3>
                    <h3 className="mb-4">Duration: 14 minutes</h3>
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
                        <li>
                            <a href='https://www.wikihow.com/Do-a-Diamond-Pushup' target="_blank" rel="noreferrer"
                                aria-label="Website demonstration for diamond press-ups (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Diamond Press-ups
                            </a>
                        </li>
                        <li>
                            <a href='https://www.menshealth.com/uk/how-tos/a61067857/skull-crushers/' target="_blank" rel="noreferrer"
                                aria-label="Website with instructions for skull-crushers (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Skull crushers
                            </a>
                        </li>
                        <li>
                            <a href='https://musclewiki.com/bodyweight/male/triceps/bench-dips' target="_blank" rel="noreferrer"
                                aria-label="Website demonstration for tricep dips (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Tricep Dips
                            </a>
                        </li>
                    </ul>
                    <h3 className='mb-4'>Equipment:</h3>
                    <ul>
                        <li>Dumbbell (7kg)</li>
                        <li>Raised Surface</li>
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
                        <li>20 seconds each arm - Dumbell Front Raise, rest 20 seconds</li>
                        <li>40 seconds - Skull Crusher, rest 20 seconds</li>
                        <li>20 seconds each arm - Dumbell Side Lateral Raise, rest 20 seconds</li>
                        <li>40 seconds - Diamond Press Ups, rest 20 seconds</li>
                        <li>20 seconds each arm - Bent Over Dumbbell Reverse Fly, rest 20 seconds</li>
                        <li>40 seconds - Tricep Dip, rest 20 seconds</li>
                        <li>20 seconds each arm - Dumbell Shoulder Press, rest 20 seconds</li>
                    </ul>
                    <p>Completed 2 rounds</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}

export default Workout204