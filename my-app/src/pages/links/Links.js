import React from 'react'

import styles from "../../styles/Links.module.css";
import noun from "../../assets/noun.svg";
import git from "../../assets/github.svg";
import dumbell2 from "../../assets/dumbell2.svg";
import chinup from "../../assets/chinup.svg";


const Links = () => {
    return (
        <div className={` my-5 ${styles.LinksTable}`}>
            <table className='text-start text-light w-75 mx-auto mt-5'>
                <thead>
                    <tr>
                        <th>Link</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <a href='https://github.com/DavidDock' target="_blank" rel="noreferrer"
                                aria-label="Visit website creators github profile (opens in a new tab)" className='text-start text-light'>
                                <img
                                    src={git}
                                    alt="git hub profile of website creator"
                                    height="70"
                                    className="p-2">
                                </img>
                            </a>
                        </td>
                        <td>My Github profile and projects</td>

                    </tr>

                    <tr>
                        <td>
                            <a href='https://thenounproject.com/' target="_blank" rel="noreferrer"
                                aria-label="Visit the noun project website (opens in a new tab)" className='text-start text-light mx-auto'>
                                <img
                                    src={noun}
                                    alt="noun project"
                                    height="70"
                                    className="p-2">
                                </img>
                            </a>
                        </td>
                        <td>The website providing the wonderful icons</td>
                    </tr>

                    <tr>
                        <td>
                            <a href='https://thenx.com/training' target="_blank" rel="noreferrer"
                                aria-label="Visit TheNX website (opens in a new tab)" className='text-start text-light mx-auto'>
                                <img
                                    src={chinup}
                                    alt="A chin up bar"
                                    height="70"
                                    className="p-2">
                                </img>
                            </a>
                        </td>
                        <td>TheNX - A useful websites with lots of example workouts</td>
                    </tr>

                    <tr>
                        <td>
                            <a href='https://arnoldspumpclub.com/' target="_blank" rel="noreferrer"
                                aria-label="Visit Arnold Schwarzenegge's website (opens in a new tab)" className='text-start text-light mx-auto'>
                                <img
                                    src={dumbell2}
                                    alt="dumbell"
                                    height="70"
                                    className="p-2">
                                </img>
                            </a>
                        </td>
                        <td>Arnold Schwarzenegger - Website providing motivation </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Links