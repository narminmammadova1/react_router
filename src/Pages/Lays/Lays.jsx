import React, { useState } from 'react'
import { products } from '../Products/Products'
import styles from "./Lays.module.css"
export const Lays = () => {
    const [count,setCount]=useState(0)

    const add=()=>{
        setCount((prewCount)=>prewCount+1)
    }
    
    const del=()=>{
if(count==0)
{return}
setCount((prewCount)=>prewCount-1)
    }

return (
    <div>
      <h1>LAYS</h1>
      <div  className={styles.mainContent}>
      <div  >
          <img src={products.product3} alt="lays" />
        </div>
        <div className={styles.buttonDiv}>
          <button onClick={add}>More Chips</button>
          {count}
          <button onClick={del}>Less Chips</button>
        </div>
        </div>

      <div className={styles.laysContainer}>
      
        {[...Array(count)].map((_, index) => (
          <div key={index}  className={styles.addLays}>
            <img src={products.product3} alt="lays" />
          </div>
        ))}
      </div>
    </div>
  );
};
