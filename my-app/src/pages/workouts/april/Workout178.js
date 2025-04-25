import {React, useState} from 'react'

import styles from "../../../styles/Workouts.module.css";
import Carousel from 'react-bootstrap/Carousel';

import grey from "../../../assets/greyexercise.svg";

const Workout178 = () => {
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
                    <h3 className='mb-4'>Date: Wed 26.04</h3>
                    <h3 className="mb-4">Body Parts: All Body</h3>
                    <h3 className="mb-4">Duration: 8 minutes</h3>
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
                                aria-label="Wiki for pike press-ups (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Pike press-Ups
                            </a>
                        </li>
                        <li>
                            <a href='https://blackbeltwiki.com/pistol-squats' target="_blank" rel="noreferrer"
                                aria-label="Website demonstrating pistol squats (opens in a new tab)" className='text-white text-decoration-underline text-decoration-underline link-secondary'>Pistol Squats - 30 seconds each leg
                            </a>
                        </li>
                        <li>
                            <a href='https://en.wikipedia.org/wiki/Crunch_(exercise)' target="_blank" rel="noreferrer"
                                aria-label="Wiki for crunches (opens in a new tab)" className='text-white text-decoration-underline text-decoration-underline link-secondary'>Crunches
                            </a>
                        </li>
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
                    <p>As many rounds as possible in 8 minutes with no rest.</p>
                    <ul>
                        <li>5 Pike press-ups</li>
                        <li>10 Pistol squats (5 each leg)</li>
                        <li>15 Crunches</li>
                    </ul>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}

export default Workout178