import {React, useState} from 'react'

import styles from "../../../styles/Workouts.module.css";
import Carousel from 'react-bootstrap/Carousel';

import grey from "../../../assets/greyexercise.svg";

const Workout61 = () => {
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
                    <h3 className='mb-4'>Date: Thur 26.09</h3>
                    <h3 className="mb-4">Body Parts: Shoulders and Biceps</h3>
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
                    <h3>Press and Curl Challenge</h3>
                    <ul>
                        <li>
                            150 each arm &nbsp;<a href='https://musclewiki.com/dumbbells/male/shoulders/dumbbell-single-arm-overhead-press/' target="_blank" rel="noreferrer"
                                aria-label="Website demonstrating One arm dumbbell shoulder press (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>One arm dumbell shoulder press
                            </a>
                        </li>
                        <li>
                            150 each arm &nbsp;<a href='https://en.wikipedia.org/wiki/Bicep_curl' target="_blank" rel="noreferrer"
                                aria-label="Wiki for Bicep curl (opens in a new tab)" className='text-white text-decoration-underline link-secondary'>One arm dumbbell bicep curls
                            </a>
                        </li>
                    </ul>
                    <p>Reps spread throughout the day as and when I had time with a 12.5 KG dumbell.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}

export default Workout61