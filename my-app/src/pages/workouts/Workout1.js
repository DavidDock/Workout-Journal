import {React, useState} from 'react'

import styles from "../../styles/Workouts.module.css";
import Carousel from 'react-bootstrap/Carousel';

import grey from "../../assets/greyexercise.svg";

const Workout1 = () => {
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
                    <h3 className='mb-4'>Date: Mon 24.06</h3>
                    <h3 className="mb-4">Body Parts: Back and Biceps</h3>
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
                        <li>Pull-Ups</li>
                        <li>One arm rows</li>
                        <li>Austrailian Pull-ups</li>
                        <li>Chin-Ups</li>
                        <li>One arm bicep curls</li>
                    </ul>
                    <h3 className='mb-4'>Equipment:</h3>
                    <ul>
                        <li>Pull-Up bar</li>
                        <li>Dumbell</li>
                    </ul>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={styles.CarouselItem}>
                <img
                    src={grey}
                    alt="background"
                    className={styles.CarouselImage}>
                </img>
                <Carousel.Caption className={styles.CarouselContent}>
                    <h3>Workout</h3>
                    <ul>
                        <li>10 reps of pull ups</li>
                        <li>10 reps of pull ups</li>
                        <li>10 reps of pull ups</li>
                        <li>10 reps of pull ups</li>
                        <li>10 reps of pull ups</li>
                        <li>10 reps of pull ups</li>
                        <li>10 reps of pull ups</li>
                    </ul>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}

export default Workout1