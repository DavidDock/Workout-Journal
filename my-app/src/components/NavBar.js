import React from 'react'
import { NavLink } from "react-router-dom";
import styles from "../styles/NavBar.module.css";

import about from "../assets/home.svg";
import journal from "../assets/journal.svg";
import links from "../assets/links.svg";

const NavBar = () => {
  return (
    <div className={`class="d-flex flex-row flex-sm-column justify-content-around align-items-around align-content-center justify-items-center ${styles.Side}`}>
      <span className="d-flex flex-column flex-sm-row align-items-center">
        <img
          src={about}
          alt="takes you to home page"
          height="50"
          className="mx-auto p-2">
        </img>
        <NavLink exact className={`hvr-sweep-to-bottom m-0 p-2 ${styles.HvrSweepToBottom}`} to="/about">About</NavLink>
      </span>
      <span className="d-flex flex-column flex-sm-row align-items-center">
      <img
          src={journal}
          alt="takes you to the workout journal"
          height="50"
          className="mx-auto p-2">
        </img>
        <NavLink exact className={`hvr-sweep-to-bottom m-0 p-2 ${styles.HvrSweepToBottom}`} to="/journal">Journal</NavLink>
      </span>
      <span className="d-flex flex-column flex-sm-row align-items-center">
      <img
          src={links}
          alt="takes you a page with links"
          height="50"
          className="mx-auto p-2">
        </img>
        <NavLink exact className={`hvr-sweep-to-bottom m-0 p-2 ${styles.HvrSweepToBottom}`} to="/links">Links</NavLink>
      </span>
    </div>
  )
}

export default NavBar