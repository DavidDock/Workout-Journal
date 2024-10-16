import {React, useState} from 'react'

import styles from "../../../styles/Workouts.module.css";
import Carousel from 'react-bootstrap/Carousel';

import grey from "../../../assets/greyexercise.svg";

const Workout72 = () => {
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
                    <h3 className='mb-4'>Date: Tue 15.10</h3>
                    <h3 className="mb-4">Body Parts: Chest and Triceps</h3>
                    <h4>Duration: 10 minutes</h4>
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
                                aria-label="Wiki for Decline press-ups (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Decline Press-Ups
                            </a>
                        </li>
                        <li>
                            <a href='https://musclewiki.com/bodyweight/male/triceps/bench-dips' target="_blank" rel="noreferrer"
                                aria-label="Website demonstration for tricep dips (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Tricep Dips
                            </a>
                        </li>
                        <li>
                            <a href='https://en.wikipedia.org/wiki/Push-up' target="_blank" rel="noreferrer"
                                aria-label="Wiki for Incline press-ups (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Incline Press-Ups
                            </a>
                        </li>
                        <li>
                            <a href='https://www.wikihow.com/Do-a-Diamond-Pushup' target="_blank" rel="noreferrer"
                                aria-label="Website demonstration for diamond press-ups (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Diamond Press-ups
                            </a>
                        </li>
                        
                    </ul>
                    <h3 className='mb-4'>Equipment:</h3>
                    <ul>
                        <li>Raised Surface/Bench</li>
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
                    <p>As many round as possible in 10 minutes. Maximun reps each exercise. </p>
                    <ul>
                        <li>Decline press-ups</li>
                        <li>Tricep dips</li>
                        <li>Decline press-ups</li>
                        <li>Diamond press-ups</li>
                        <li>45 seconds rest</li>
                    </ul>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}

export default Workout72