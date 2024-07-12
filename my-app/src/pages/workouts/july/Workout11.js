import {React, useState} from 'react'

import styles from "../../../styles/Workouts.module.css";
import Carousel from 'react-bootstrap/Carousel';

import grey from "../../../assets/greyexercise.svg";

const Workout11 = () => {
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
                    <h3 className='mb-4'>Date: Tues 09.07</h3>
                    <h3 className="mb-4">Body Parts: Chest and Triceps</h3>
                    <h4>Summary: 400 reps throughout the day</h4>
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
                            <a href='https://www.wikihow.com/Do-a-Diamond-Pushup' target="_blank" rel="noreferrer"
                                aria-label="Website demonstration for diamond press-ups (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Diamond Press-ups
                            </a>
                        </li>
                        <li>
                            <a href='https://blackbeltwiki.com/wide-grip-push-ups' target="_blank" rel="noreferrer"
                                aria-label="Website demonstration for wide press-ups (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Wide press-ups
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
                    <p>Throughout the day split up in sets of 20 of each ecercise then finish up with 100 more press-ups</p>
                    <ul>
                        <li>200 press-ups</li>
                        <li>100 diamond press-ups</li>
                        <li>100 wide press-ups</li>
                    </ul>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}

export default Workout11