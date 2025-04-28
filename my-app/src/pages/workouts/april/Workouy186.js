import {React, useState} from 'react'

import styles from "../../../styles/Workouts.module.css";
import Carousel from 'react-bootstrap/Carousel';

import grey from "../../../assets/greyexercise.svg";

const Workout186 = () => {
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
                    <h3 className='mb-4'>Date: Wed 30.04</h3>
                    <h3 className="mb-4">Body Parts: Shoulders</h3>
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
                            <a href='https://www.wikihow.com/Do-Pike-Push-Ups' target="_blank" rel="noreferrer"
                                aria-label="Website demonstrating pike press-ups (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Pike Press-Ups
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
                        <li>
                            <a href='https://www.puregym.com/exercises/arms-and-shoulders/upright-rows/dumbbell-upright-row/' target="_blank" rel="noreferrer"
                                aria-label="Website demonstrating One arm dumbbell upright row (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>One arm dumbell upright row
                            </a>
                        </li>
                        <li>
                            <a href='https://www.muscleandstrength.com/exercises/dumbbell-shrugs.html' target="_blank" rel="noreferrer"
                                aria-label="Website demonstrating One arm dumbbell shrug (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>One arm dumbell shrug
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
                    <h4>Superset - 3 rounds: </h4>
                    <ul>
                        <li>8 reps each arm - dumbbell side lateral raise</li>
                        <li>8 reps each arm - dumbbell front raise</li>
                        <li>8 reps each arm - bent over dumbbell reverse fly</li>
                        <li>8 reps each arm - dumbbell upright row</li>
                        <li>8 reps each arm - dumbbell shoulder press</li>
                        <li>8 reps each arm - dumbbell shrug</li>
                        <li>60 seconds rest</li>
                    </ul>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}

export default Workout186