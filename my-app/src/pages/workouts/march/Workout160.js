import {React, useState} from 'react'

import styles from "../../../styles/Workouts.module.css";
import Carousel from 'react-bootstrap/Carousel';

import grey from "../../../assets/greyexercise.svg";

const Workout160 = () => {
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
                    <h3 className='mb-4'>Date: Wed 19.03</h3>
                    <h3 className="mb-4">Body Parts: Shoulders</h3>
                    <h3 className="mb-4">Duration: 8 minutes</h3>
                    <h4><small>Plus the squat challenge</small></h4>
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
                            <a href='https://en.wikipedia.org/wiki/Squat_(exercise)' target="_blank" rel="noreferrer"
                                aria-label="Wiki for squats (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Air Squats
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
                    <p>Two rounds of the following super-set:</p>
                    <ul>
                        <li>10 reps each arm - dumbbell side lateral raise</li>
                        <li>10 reps each arm - dumbbell front raise</li>
                        <li>10 reps each arm - bent over dumbbell reverse fly</li>
                        <li>10 reps each arm - dumbbell shoulder press</li>
                        <li>1 Minute rest</li>
                    </ul>
                    <p>Plus day 3 of the week long 200 rep challenge for squats (completed in one go or spread throughout the day)</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}

export default Workout160