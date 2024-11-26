import {React, useState} from 'react'

import styles from "../../../styles/Workouts.module.css";
import Carousel from 'react-bootstrap/Carousel';

import grey from "../../../assets/greyexercise.svg";

const Workout98 = () => {
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
                    <h3 className='mb-4'>Date: Tues 26.11</h3>
                    <h3 className="mb-4">Body Parts: Chest and Shoulders</h3>
                    <h3 className="mb-4">Duration: 12 minutes</h3>
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
                            <a href='https://en.wikipedia.org/wiki/Push-up' target="_blank" rel="noreferrer"
                                aria-label="Wiki for press-ups (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Press-Ups
                            </a>
                        </li>
                        <li>
                            <a href='https://www.wikihow.com/Do-Pike-Push-Ups' target="_blank" rel="noreferrer"
                                aria-label="Wiki for pike press-ups (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Pike press-Ups
                            </a>
                        </li>
                        <li>
                            <a href='https://musclewiki.com/bodyweight/male/chest/incline-push-up' target="_blank" rel="noreferrer"
                                aria-label="Wiki for incline push-ups (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Incline push-ups
                            </a>
                        </li>
                        <li>
                            <a href='https://www.bodybuilding.com/exercises/one-arm-side-laterals#:~:text=While%20maintaining%20the%20torso%20stationary,a%20second%20at%20the%20top.' target="_blank" rel="noreferrer"
                                aria-label="Website demonstrating One arm dumbbell side lateral raise (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>One arm dumbbell side lateral raise
                            </a>
                        </li>
                        <li>
                            <a href='https://musclewiki.com/bodyweight/female/chest/decline-push-up' target="_blank" rel="noreferrer"
                                aria-label="Wiki for decline push-ups (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Decline push-ups
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
                    <h4>Each exercise for 40 seconds then 20 seconds rest.  </h4>
                    <ul>
                        <li>press-ups</li>
                        <li>pike press-ups</li>
                        <li>incline press-ups</li>
                        <li>dumbbell side lateral raise (20 seconds each arm)</li>
                        <li>decline press-ups</li>
                        <li>dumbbell press (20 seconds each arm)</li>
                    </ul>
                    <p>Completed 2 rounds</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}

export default Workout98