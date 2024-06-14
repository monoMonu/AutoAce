import React from "react";
import styles from './card2.module.css';

const Card2 = ({img, text, bg}) => (
   <div className={styles.card2} style={{backgroundColor: bg}}>
      <div className={styles.imgBox}>
         <img src={img} alt="Symbol" />
      </div>
      <h2>{text}</h2>
      <a href="#">Learn more →</a>
   </div>
)

export { Card2 }