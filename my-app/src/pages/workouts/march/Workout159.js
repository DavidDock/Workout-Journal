import {React, useState} from 'react'

import styles from "../../../styles/Workouts.module.css";
import Carousel from 'react-bootstrap/Carousel';

import grey from "../../../assets/greyexercise.svg";

const Workout159 = () => {
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
                    <h3 className='mb-4'>Date: Tue 18.03</h3>
                    <h3 className="mb-4">Body Parts: Chest and Triceps</h3>
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
                            <a href='https://en.wikipedia.org/wiki/Push-up' target="_blank" rel="noreferrer"
                                aria-label="Wiki for press-ups (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Press-Ups
                            </a>
                        </li>
                        <li>
                            <a href='https://www.hybridcalisthenics.com/archer-pushups' target="_blank" rel="noreferrer"
                                aria-label="Demonstration of archer press-ups (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Archer Press-Ups
                            </a>
                        </li>
                        <li>
                            <a href='https://musclewiki.com/bodyweight/male/triceps/bench-dips' target="_blank" rel="noreferrer"
                                aria-label="Website demonstration for tricep dips (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Tricep Dips
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
                            <a href='https://en.wikipedia.org/wiki/Squat_(exercise)' target="_blank" rel="noreferrer"
                                aria-label="Wiki for squats (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Air Squats
                            </a>
                        </li>
                    </ul>
                    <h3 className='mb-4'>Equipment:</h3>
                    <ul>
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
                    <p>Rest 30 seconds between the following exercises:</p>
                    <ul>
                        <li>Max Press-ups</li>
                        <li>Max Skull crushers</li>
                        <li>Max Archer press-ups (both sides)</li>
                        <li>30 seconds rest</li>
                        <li>Max Diamond press-ups</li>
                        <li>10 Explosive Press-ups</li>
                        <li>Max Tricep Dips</li>
                        <li>Slow Press-ups for 30 seconds</li>
                    </ul>
                    <p>Plus day 2 of the week long 200 rep challenge for squats (completed in one go or spread throughout the day)</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}

export default Workout159