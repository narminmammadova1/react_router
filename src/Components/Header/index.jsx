import React from 'react'
import styles from "./Header.module.css"
import { useLocation, useNavigate } from 'react-router-dom'
import { ROUTER } from '../../constant/Router'
import { activeLink } from '../../Utils/activeLink'
export const Header = () => {
const navigate=useNavigate()
const {pathname}=useLocation()
  return (
    <div className={styles.header}>
      <div className={styles.buttonDiv}>
<button onClick={()=>navigate(-1)}>GoBack</button>
<button  onClick={()=>navigate(1)}>ForwArd</button>
<button  onClick={()=>navigate("../")}>HomePage</button>
</div>
<ul>
  {/* <li> */}
    {/* <Link to= "/" >Home</Link>
    <Link to= "/about" >About</Link>
    <Link to= "/contact" >Contact</Link> */}
  {/* </li> */}
  <li className={activeLink(ROUTER.HOME,pathname) ? "active": ""} onClick={()=>navigate(ROUTER.HOME)}>Home</li>
  <li className={activeLink(ROUTER.ABOUT,pathname) ? "active": ""} onClick={()=>navigate(ROUTER.ABOUT)}>About</li>
  <li className={activeLink(ROUTER.CONTACT,pathname) ? "active" : ""} onClick={()=>navigate(ROUTER.CONTACT)}>Contact</li>
  <li className={activeLink(ROUTER.PRODUCTS,pathname) ? "active" : ""} onClick={()=>navigate(ROUTER.PRODUCTS)}>Our Products</li>
  <li className={activeLink(ROUTER.CALCULATOR,pathname) ? "active" : ""} onClick={()=>navigate(ROUTER.CALCULATOR)}>Calculator</li>

</ul>
    </div>
  )
}

