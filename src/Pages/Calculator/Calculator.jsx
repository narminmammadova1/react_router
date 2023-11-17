import React from 'react'
import styles from "./Calculator.module.css"
import { Link } from 'react-router-dom'
import { ROUTER } from '../../constant/Router'
export const Calculator = () => {
  
  return (
    <div>
        <Link to={ROUTER.ADDITION}>
    <button>Addition</button>
    </Link >
    <Link to={ROUTER.SUBTRACTION} >  
    <button>Subtriction</button>
    </Link>



    </div>
  )
}

