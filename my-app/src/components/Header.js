import React from 'react'
import styles from "../styles/Header.module.css";

import bearcrawl from "../assets/bearcrawl.svg";
import dumbell from "../assets/dumbell.svg";
import mandumbell from "../assets/mandumbell.svg";
import pistol from "../assets/pistol.svg";
import pullups from "../assets/pullups.svg";
import running from "../assets/running.svg";
import stepup from "../assets/stepup.svg";

const Header = () => {
  return (
    <div className={styles.AppHeader}>
      <div className={` d-flex flex-row w-100 ${styles.LogoContainer}`}>
      <img
                  src={bearcrawl}
                  alt="Bear Crawl Exercise"
                  height="50">
      </img>
      <img
                  src={dumbell}
                  alt="A dumbell"
                  height="50"
                  className="d-none d-sm-block">
      </img>
      <img
                  src={stepup}
                  alt="A foot doing a stepup"
                  height="50">
      </img>
      <img
                  src={pistol}
                  alt="A person doing a pistol squat"
                  height="50"
                  className="images d-none d-sm-block">
      </img>
      <img
                  src={mandumbell}
                  alt="A man holding a dumbell"
                  height="50">
      </img>
      <img
                  src={pullups}
                  alt="Figure doing a pull up"
                  height="50">
      </img>
      <img
                  src={running}
                  alt="Figure running"
                  height="50">
      </img>
      </div>
    </div>
  )
}

export default Header