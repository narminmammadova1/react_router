import React from 'react'
import styles from "./Home.module.css"
const coffeImage = '/images/mainimg.jpg';

export const Home = () => {
  return (
    <div>
      <div>
      
      <div className={styles.homeMain} >
      <img 
   src={coffeImage} alt="Coffee" />
  
          </div>  
      </div>
     </div> 
  )
}

