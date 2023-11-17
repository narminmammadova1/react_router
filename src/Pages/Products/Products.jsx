import React from 'react'
import {Link, Routes,Route } from 'react-router-dom'
import { Lays } from '../Lays/Lays'
import { Cola } from '../Cola/Cola'
import { Soda } from '../Soda/Soda'
import styles from "./Products.module.css"
export const products={
    product1:"/images/Soda.jfif",
    product2:"/images/Cola.jfif",
    product3:"/images/Lays.jfif",


}
export const Products = () => {
  return (
    <>
    <h1>Our products</h1>
    <div>
     <div className={styles.products}>
        <Link to="/products/soda">
<div>
    <img src={products.product1} alt="" />
    <h3>Soda</h3>
</div>
</Link>
<Link to="/products/cola">
<div>

    <img src={products.product2} alt="" />
<h3>Cola</h3>
</div>
</Link>
<Link to="/products/lays">
<div>
    <img src={products.product3} alt="" />
    <h3>Lays</h3>
</div>
</Link>
     </div>

     <Routes>
        <Route>
        <Route path='soda' element={<Soda/>}></Route>
        <Route path='cola' element={<Cola/>}></Route>
        <Route path='lays' element={<Lays/>}></Route>

        </Route>
     </Routes>
    </div>
    </>
  )

  
}

