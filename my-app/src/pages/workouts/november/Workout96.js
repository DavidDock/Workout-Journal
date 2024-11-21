import {React, useState} from 'react'

import styles from "../../../styles/Workouts.module.css";
import Carousel from 'react-bootstrap/Carousel';

import grey from "../../../assets/greyexercise.svg";

const Workout96 = () => {
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
                    <h3 className='mb-4'>Date: Fri 22.11</h3>
                    <h3 className="mb-4">Body Parts: All Body</h3>
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
                            <a href='https://en.wikipedia.org/wiki/Pull-up_(exercise)' target="_blank" rel="noreferrer"
                                aria-label="Wiki for pull-ups (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Pull-Ups
                            </a>
                        </li>
                        <li>
                            <a href='https://en.wikipedia.org/wiki/Push-up' target="_blank" rel="noreferrer"
                                aria-label="Wiki for press-ups (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Press-Ups
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
                        <li>Pull-Up bar</li>
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
                    <h4>Half Murph</h4>
                    <ul>
                        <li>50 pull-ups</li>
                        <li>100 press-ups</li>
                        <li>150 air squats</li>
                        <li>1/2 Mile Run</li>
                    </ul>
                    <p>I split the pull-ups, press-ups and squats into small sets and did them as fast as I could.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}

export default Workout96