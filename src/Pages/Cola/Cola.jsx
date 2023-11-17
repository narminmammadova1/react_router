import React from 'react'
import { products } from '../Products/Products'

export const Cola = () => {
  return (
    <div>
      <h1>Cola</h1>
      <img src={products.product2}alt="" />
      <p>Cola is not a good choice for you</p>
    </div>
  )
}

