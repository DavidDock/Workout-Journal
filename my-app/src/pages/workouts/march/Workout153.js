import {React, useState} from 'react'

import styles from "../../../styles/Workouts.module.css";
import Carousel from 'react-bootstrap/Carousel';

import grey from "../../../assets/greyexercise.svg";

const Workout153 = () => {
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
                    <h3 className='mb-4'>Date: Mon 10.03</h3>
                    <h3 className="mb-4">Body Parts: Mini All Body</h3>
                    <h3 className="mb-4">Duration: 5 minutes</h3>
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
                            <a href='https://en.wikipedia.org/wiki/Pull-up_(exercise)' target="_blank" rel="noreferrer"
                                aria-label="Wiki for pull-ups (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Pull-Ups
                            </a>
                        </li>
                        <li>
                            <a href='https://thenx.com/exercises/976' target="_blank" rel="noreferrer"
                                aria-label="Website demonstrating frog squats (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Frog Squats
                            </a>
                        </li>
                        <li>
                            <a href='https://en.wiktionary.org/wiki/chin-up' target="_blank" rel="noreferrer"
                                aria-label="Wiki for Chin-ups (opens in a new tab)" className='text-white text-decoration-underline text-decoration-underline link-secondary'>Chin-ups
                            </a>
                        </li>
                        <li>
                            <a href='https://en.wikipedia.org/wiki/Calf_raises' target="_blank" rel="noreferrer"
                                aria-label="Wiki for Calve Raises (opens in a new tab)" className='text-white text-decoration-underline text-decoration-underline link-secondary'>100 - Standing Calve Raises
                            </a>
                        </li>  
                    </ul>
                    <h3 className='mb-4'>Equipment:</h3>
                    <ul>
                        <li>Pull-up bar</li>
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
                    <p>This is another quick workout, something is always better than nothing.<br></br>5 rounds completed of the following:</p>
                    <ul>
                        <li>5 pull-ups</li>
                        <li>10 frog squats</li>
                        <li>chin-ups</li>
                        <li>10 calve raises</li>
                    </ul>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}

export default Workout153