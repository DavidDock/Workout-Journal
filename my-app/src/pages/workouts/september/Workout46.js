import {React, useState} from 'react'

import styles from "../../../styles/Workouts.module.css";
import Carousel from 'react-bootstrap/Carousel';

import grey from "../../../assets/greyexercise.svg";

const Workout46 = () => {
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
                    <h3 className='mb-4'>Date: Thurs 05.09</h3>
                    <h3 className="mb-4">Body Parts: Triceps and Abs</h3>
                    <h3 className="mb-4">Duration: Throughout the day</h3>
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
                    <h4>Diamond Press-up and Crunches </h4>
                    <p>
                        200 <a href='https://www.wikihow.com/Do-a-Diamond-Pushup' target="_blank" rel="noreferrer"
                                aria-label="Website demonstration for diamond press-ups (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>Diamond Press-ups
                            </a> and <a href='https://en.wikipedia.org/wiki/Crunch_(exercise)' target="_blank" rel="noreferrer"
                                aria-label="Wiki for crunches (opens in a new tab)" className='text-white text-decoration-underline text-decoration-underline link-secondary'>Crunches
                            </a> throughout the day.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}

export default Workout46