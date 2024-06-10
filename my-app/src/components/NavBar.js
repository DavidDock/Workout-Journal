import React from 'react'
import styles from "../styles/NavBar.module.css";
const NavBar = () => {
  return (
    <div className={`class="d-flex flex-row flex-sm-column justify-content-around align-items-around ${styles.Side}`}>
      <p class={`hvr-sweep-to-bottom m-0 p-2 ${styles.HvrSweepToBottom}`}>about</p>
      <p class={`hvr-sweep-to-bottom m-0 p-2 ${styles.HvrSweepToBottom}`}>Journal</p>
      <p class={`hvr-sweep-to-bottom m-0 p-2 ${styles.HvrSweepToBottom}`}>References</p>
    </div>
  )
}

export default NavBar