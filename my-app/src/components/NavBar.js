import React from 'react'
import { NavLink } from "react-router-dom";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <div className={`class="d-flex flex-row flex-sm-column justify-content-around align-items-around ${styles.Side}`}>
      <NavLink exact className={`hvr-sweep-to-bottom m-0 p-2 ${styles.HvrSweepToBottom}`} to="/">About</NavLink>
      <NavLink exact className={`hvr-sweep-to-bottom m-0 p-2 ${styles.HvrSweepToBottom}`} to="/journal">Journal</NavLink>
      <NavLink exact className={`hvr-sweep-to-bottom m-0 p-2 ${styles.HvrSweepToBottom}`} to="/references">References</NavLink>
    </div>
  )
}

export default NavBar