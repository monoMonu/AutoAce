import React from "react";
import styles from './card1.module.css';

const Card1 = ({img, heading, text}) => (
   <div className={styles.card1}>
      <img src={img} alt={heading} />
      <p>
         <h4>{heading}</h4>
         <p>{text}</p>
      </p>
   </div>
)

export { Card1 }